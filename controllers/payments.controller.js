const service = require("../services/payments.service");
const { getJsonResponse } = require("../utils/common");


const getAllPayments = async (req, res) => {
    try {
        const response = await service.getAllPayments(req.query)
        return res.status(response.status).json(response.data)
    }
    catch (err) {
        console.log(`payments.controller.js - getAllPayments - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}

const getTotalMonthlyCollection = async (req, res) => {
    try {
        const response = await service.getTotalMonthlyCollection()
        return res.status(response.status).json(response.data)
    }
    catch (err) {
        console.log(`payments.controller.js - getTotalMonthlyCollection - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}

module.exports = {
    getAllPayments,
    getTotalMonthlyCollection
}