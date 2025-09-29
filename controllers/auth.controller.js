const service = require("../services/appointment.service");
const { generateAccessToken, generateRefreshToken, isRefreshTokenValid } = require("../tokens/utils");
const { getJsonResponse, commonWorker } = require("../utils/common")
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const passport = require("passport");
const authWorker = require("../worker/auth.worker");


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            console.log(`auth.controller.js - registerUser - name, email, password are required`)
            return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
        }

        const user = await commonWorker("SELECT * FROM user WHERE Email = ?", [email], "auth.controller.js - registerUser");
        if (user.queryRes.length > 0) {
            console.log(`auth.controller.js - registerUser - user already exists`)
            return res.status(400).json(getJsonResponse(false, [], "user already exists", null))
        }
        const hash = await bcrypt.hash(password, 10);
        const token = crypto.randomBytes(32).toString("hex");

        const response = await commonWorker("INSERT INTO user (Name, Email, Password, VerificationToken) VALUES (?, ?, ?, ?)", [name, email, hash, token], "auth.controller.js - registerUser");
        if (response.queryErr) {
            console.log(`auth.controller.js - registerUser - ${response.queryErr}`)
            return res.status(500).json(getJsonResponse(false, [], "internal server error", null))
        }

        return res.status(200).json(getJsonResponse(true, [], "user registered successfully", null))


    } catch (error) {
        console.log(`auth.controller.js - registerUser - ${error.message}`)
        return res.status(500).json(getJsonResponse(false, [], "internal server error", null))
    }
}

const loginUser = async (req, res, next) => {
    passport.authenticate("local", { session: false }, async (err, user, info) => {
        try {
            if (err) return next(err);
            if (!user) return res.status(401).json({ message: info?.message || "Login failed" });
    
            const accessToken = generateAccessToken(user);
            const refreshToken = await generateRefreshToken(user);
    
            if (!accessToken || !refreshToken) {
                console.log(`auth.controller.js - loginUser - accessToken or refreshToken is null`)
                return res.status(500).json(getJsonResponse(false, [], "internal server error", null))
            }

            const userDetailsResponse = await authWorker.getUserDetails([user.Id]);
            let userDetails = null;
            
            if (userDetailsResponse.queryRes && userDetailsResponse.queryRes.length > 0 && userDetailsResponse.queryRes[0]) {
                userDetails = userDetailsResponse.queryRes[0][0];
            }

            const tokens = { accessToken, refreshToken, user: userDetails ? userDetails : { Id: user.Id, Name: user.Name, Email: user.Email }  }
            res.json(getJsonResponse(true, tokens, "login successful", null));
        } catch (error) {
            console.log(`auth.controller.js - loginUser - ${error.message}`)
            return res.status(500).json(getJsonResponse(false, [], "internal server error", null))
        }
      
    })(req, res, next);
}


const verifyRefreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            console.log(`auth.controller.js - verifyRefreshToken - refreshToken is null`)
            return res.status(400).json(getJsonResponse(false, [], "Invalid Request", null))
        }
        const stored = await isRefreshTokenValid(refreshToken);

        if (!stored) {
            console.log(`auth.controller.js - verifyRefreshToken - refresh token expired`)
            return res.status(403).json({ message: "Your session is expired please log in again" });
        } 
      
        let user = await commonWorker("SELECT * FROM user WHERE Id = ?", [stored.UserId], "auth.controller.js - verifyRefreshToken");
        user = user.queryRes && user.queryRes[0] ? user.queryRes[0] : null;
        const newAccessToken = generateAccessToken(user);
        res.json(getJsonResponse(false, { accessToken: newAccessToken }, "new access token generated", null));
    } catch (error) {   
        console.log(`auth.controller.js - verifyRefreshToken - ${error.message}`)
        return res.status(500).json(getJsonResponse(false, [], "internal server error", null))
    }
   
  };
  
const logoutUser = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            console.log(`auth.controller.js - logout - refreshToken is null`)
            return res.status(400).json(getJsonResponse(false, [], "Invalid Request", null))
        }
        const response = await commonWorker("DELETE FROM user_refresh_token WHERE RefreshToken = ?", [refreshToken], "tokens/utils.js - revokeRefreshToken -");
        if (response.queryErr) {
            console.log(`auth.controller.js - logout - ${response.queryErr}`);
            return res.status(500).json(getJsonResponse(false, [], "Internal server error", null));
        }
        if (response.queryRes) {
            return res.status(200).json(getJsonResponse(false, [], "Logout successful", null));
        }
    } catch (error) {
        console.log(`auth.controller.js - loginUser - ${error.message}`)
        return res.status(500).json(getJsonResponse(false, [], "internal server error", null))
    }
};


module.exports = { registerUser, loginUser, verifyRefreshToken, logoutUser }

