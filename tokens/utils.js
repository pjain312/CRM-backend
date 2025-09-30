const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { commonWorker } = require("../utils/common");

function generateAccessToken(user) {
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRES_IN;
  
  return jwt.sign({ id: user.Id, email: user.Email, name: user.Name }, secret, 
    { expiresIn: expiresIn }
  );
}

async function generateRefreshToken(user) {
    try {
        const token = crypto.randomBytes(64).toString("hex");
        const refreshTokenExpiresDays = parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRES_DAYS);
        const expiresAt = new Date(Date.now() + refreshTokenExpiresDays * 24 * 60 * 60 * 1000);
        // const expiresAt = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes from now
      
        const response = await commonWorker("INSERT INTO user_refresh_token (UserId, RefreshToken, ExpiresAt) VALUES (?, ?, ?)",
          [user.Id, token, expiresAt],
          "tokens/utils.js - generateRefreshToken -"
        );

        if (response.queryErr) {
            console.log(`tokens/utils.js - generateRefreshToken - ${response.queryErr}`)
            return null;
        }

        if (response.queryRes) {
            return token;
        }
      
        return null;
    } catch (error) {
        console.log(`tokens/utils.js - generateRefreshToken - ${error.message}`)
        return null;
    }

}

async function isRefreshTokenValid(token) {
  const currentTime = new Date();
  const result = await commonWorker("SELECT * FROM user_refresh_token WHERE RefreshToken = ? AND ExpiresAt > ?", [token, currentTime], "tokens/utils.js - verifyRefreshToken -");
  return result.queryRes && result.queryRes[0] ? result.queryRes[0] : null;
}



module.exports = {
  generateAccessToken,
  generateRefreshToken,
  isRefreshTokenValid,
};
