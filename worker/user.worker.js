const { commonWorker } = require("../utils/common")

const userDetails = (params) => {
    return commonWorker("CALL UserDetails(?)", params, 'user.worker.js - userDetails -')
}


module.exports = {
    userDetails,
   
}