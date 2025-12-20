const { commonWorker } = require("../utils/common")

const getAllPayments = (params) => {
    return commonWorker("CALL GetAllPayments(?,?)", params, 'payments.worker.js - getAllPayments -')
}

const getTotalMonthlyCollection = (params) => {
    return commonWorker("CALL GetTotalMonthlyCollection()", params, 'payments.worker.js - getTotalMonthlyCollection -')
}

module.exports = {
    getAllPayments,
    getTotalMonthlyCollection
}