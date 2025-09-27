const service = require("../services/user.service");
const { getJsonResponse } = require("../utils/common");


const userDetails = async (req, res) => {
    try {
        const userId = req.user.id;
        if ( !userId ) {
            console.log(`user.controller.js - userDetails - ${userId} is required`)
            return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
        }
        else {
            const response = await service.userDetails(userId)
            return res.status(response.status).json(response.data)
        }
    }
    catch (err) {
        console.log(`user.controller.js - userDetails - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}




module.exports = {
    userDetails
}