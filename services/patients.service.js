
const worker = require("../worker/patients.worker");

const { getJsonResponse } = require("../utils/common");
const getPatientDetails = async (req) => {
    const { patientId} = req.query;
    const params = [patientId]
    const response = await worker.getPatientDetails(params)
    if (response.queryErr) {
        console.log(`patients.service-js - getPatientDetails - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, response.queryRes[0] ? response.queryRes[0][0] : {}, null, null) }
    }
}

const getPatientAppointment = async (req) => {
    const { patientId} = req.query;
    const params = [patientId]
    const response = await worker.getPatientAppointment(params)
    if (response.queryErr) {
        console.log(`patients.service-js - getPatientAppointment - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, response.queryRes[0] ? response.queryRes[0] : [], null, null) }
    }
}

const getPatientTransactions = async (req) => {
    const { patientId} = req.query;
    const params = [patientId]
    const response = await worker.getPatientTransactions(params)
    if (response.queryErr) {
        console.log(`patients.service-js - getPatientTransactions - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, response.queryRes[0] ? response.queryRes[0] : [], null, null) }
    }
}

const getPatientPackages = async (req) => {
    const { patientId} = req.query;
    const params = [patientId]
    const response = await worker.getPatientPackages(params)
    if (response.queryErr) {
        console.log(`patients.service-js - getPatientPackages - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, response.queryRes[0] ? response.queryRes[0] : [], null, null) }
    }
}

const payPackageDues = async (req) => {
    const { patientId, packageId, paymentMode, sessionCharges} = req.body;
    const params = [patientId, packageId, paymentMode, sessionCharges]
    const response = await worker.payPackageDues(params)
    if (response.queryErr) {
        console.log(`patients.service-js - payPackageDues - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, response.queryRes, null, null) }
    }
}

module.exports = {
    getPatientDetails,
    getPatientAppointment,
    getPatientTransactions,
    getPatientPackages, 
    payPackageDues
}