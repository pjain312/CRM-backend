
const worker = require("../worker/user.worker");
const { getJsonResponse } = require("../utils/common");

const userDetails = async (userId) => {
    const response = await worker.userDetails([userId])
    if (response.queryErr) {
        console.log(`user.service-js - userDetails - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        const userDetails = response.queryRes && response.queryRes[0] ? response.queryRes[0][0] : null;
        return { status: 200, data: getJsonResponse(true, {userDetails}, null, null) }
    }
}


module.exports = {
    userDetails,

}


