
const { commonWorker } = require("../utils/common")

const authWorker = (() => {
    const getUserDetails = (params) => {
        return commonWorker("CALL GetUserDetails(?)", params, 'auth.worker.js - getUserDetails -')
    }

    return { 
        getUserDetails
    }
})();

module.exports = authWorker