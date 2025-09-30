const jwt = require("jsonwebtoken");
const { getJsonResponse } = require("../utils/common");

const validateJwt = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            console.log('validateJwt.js - No token provided or invalid format');
            return res.status(401).json(getJsonResponse(false, [], "Access token required", null));
        }

        const token = authHeader.substring(7);

        if (!token) {
            console.log('validateJwt.js - Token is empty');
            return res.status(401).json(getJsonResponse(false, [], "Access token required", null));
        }

        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secret); 
        
        req.user = {
            id: decoded.id,
            email: decoded.email,
            name: decoded.name
        };

        console.log(`validateJwt.js - Token validated for user: ${decoded.email}`);
        next();

    } catch (error) {
        console.log(`validateJwt.js - Token validation failed: ${error.message}`);
        
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json(getJsonResponse(false, [], "Access token expired", null));
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json(getJsonResponse(false, [], "Invalid access token", null));
        } else {
            return res.status(500).json(getJsonResponse(false, [], "Token validation error", null));
        }
    }
};

module.exports = { validateJwt };
