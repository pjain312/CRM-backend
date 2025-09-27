const passport = require("passport");
const { commonWorker } = require("../utils/common");
const bcrypt = require("bcryptjs");

const LocalStrategy = require("passport-local").Strategy;
const initiatePassport = () => {
    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    }, async (email, password, done) => {
        try {
            let user = await commonWorker("SELECT * FROM user WHERE Email = ?", [email], "passport/util.js - initiatePassport -")
            user = user.queryRes && user.queryRes[0] ? user.queryRes[0] : null;
            if (!user) {
                return done(null, false, { message: "User not found" });
            }
            // if (!user.Verified) return done(null, false, { message: "Please verify your email before logging in" });
            const match = await bcrypt.compare(password, user.Password);

            if (!match) return done(null, false, { message: "Incorrect password" });

            return done(null, user, { message: "Login successful" });
        } catch (error) {
            return done(error, false, { message: "Internal server error" });
        }
    }));

    const serializeUser = (user, done) => {
        done(null, user.Id);
    }

    const deserializeUser = async (id, done) => {
        let user = await commonWorker("SELECT * FROM user WHERE Id = ?", [id], "passport/util.js - deserializeUser -")
        user = user.queryRes && user.queryRes[0] ? user.queryRes[0] : null;
        if (!user) {
            return done(null, false, { message: "User not found" });
        }
        done(null, user);
    }

    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    console.log("passport working properly")
}


module.exports = { initiatePassport }

