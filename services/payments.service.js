const worker = require("../worker/payments.worker");
const { getJsonResponse } = require("../utils/common");

const getAllPayments = async (reqQuery) => {
    const {month, year} = reqQuery,
    params = [month, year]
    const response = await worker.getAllPayments(params)
    if (response.queryErr) {
        console.log(`payments.service-js - getAllPayments - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, response.queryRes[0], null, null) }
    }
}

const getTotalMonthlyCollection = async () => {
    const response = await worker.getTotalMonthlyCollection()
    if (response.queryErr) {
        console.log(`payments.service-js - getTotalMonthlyCollection - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        const collection = {
            totalCollection: response.queryRes[0] && response.queryRes[0][0] && response.queryRes[0][0].TotalCollection,
        }
        return { status: 200, data: getJsonResponse(true, collection, null, null) }
    }
}

module.exports = {
    getAllPayments,
    getTotalMonthlyCollection
}