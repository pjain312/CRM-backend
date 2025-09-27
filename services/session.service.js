const worker = require("../worker/session.worker");
const { getJsonResponse } = require("../utils/common");

const checkInPatient = async (reqBody) => {
    const { patientId, appointmentId } = reqBody;
    const params = [patientId, appointmentId]
    const response = await worker.checkInPatient(params)
    if (response.queryErr) {
        console.log(`session.service-js - checkInPatient - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        const storedSession = response.queryRes[0] && response.queryRes[0][0] ? response.queryRes[0][0] : {}
        return { status: 200, data: getJsonResponse(true, storedSession, "Patient check in successfull", null) }
    }
}

const startSession = async (reqBody) => {
    const { sessionId } = reqBody;
    const params = [sessionId]
    const response = await worker.startSession(params)
    if (response.queryErr) {
        console.log(`session.service-js - startSession - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, [], "Session started successfully", null) }
    }
}  

const endSession = async (reqBody) => {
    const { sessionId } = reqBody;
    const params = [sessionId]
    const response = await worker.endSession(params)
    if (response.queryErr) {
        console.log(`session.service-js - endSession - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, [], "Session ended successfully", null) }
    }
} 

const sessionCharges = async (reqBody) => {
    const { sessionId, amount, paymentMode } = reqBody;
    const params = [sessionId, amount, paymentMode]
    const response = await worker.sessionCharges(params)
    if (response.queryErr) {
        console.log(`session.service-js - sessionCharges - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, [], "Session charges submited successfully", null) }
    }
}

const checkoutPatient = async (reqBody) => {
    const { sessionId, packageId, sessionCharges, paymentMode } = reqBody;
    const params = [sessionId, packageId, sessionCharges, paymentMode]
    const response = await worker.checkoutPatient(params)
    if (response.queryErr) {
        console.log(`session.service-js - checkoutPatient - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, [], null, null) }
    }
}

const getPatientDetailsForCheckout = async (reqQuery) => {
    const { sessionId } = reqQuery;
    const params = [sessionId]
    const response = await worker.getPatientDetailsForCheckout(params)
    if (response.queryErr) {
        console.log(`session.service-js - getPatientDetailsForCheckout - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, response.queryRes[0] && response.queryRes[0][0] ? response.queryRes[0][0] : {}, null , null) }
    }
}

const getAllPackagesAndSessionTypes = async () => {
    const response = await worker.getAllPackagesAndSessionTypes()
    if (response.queryErr) {
        console.log(`session.service-js - getAllPackagesAndSessionTypes - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        const res = {
            packages: response.queryRes[0],
            sessionTypes: response.queryRes[1],
            paymentModes: response.queryRes[2]
        }
        return { status: 200, data: getJsonResponse(true, res, null , null) }
    }
}

module.exports = {
    checkInPatient,
    startSession,
    endSession,
    sessionCharges,
    checkoutPatient,
    getPatientDetailsForCheckout,
    getAllPackagesAndSessionTypes
}