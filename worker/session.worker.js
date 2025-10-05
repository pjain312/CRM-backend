const { commonWorker } = require("../utils/common")

const checkInPatient = (params) => {
    return commonWorker("CALL CheckInPatient(?,?)", params, 'session.worker.js - checkInPatient -')
}

const startSession = (params) => {
    return commonWorker("CALL StartSession(?)", params, 'session.worker.js - startSession -')
}

const endSession = (params) => {
    return commonWorker("CALL EndSession(?)", params, 'session.worker.js - endSession -')
}

const getPatientDetailsForCheckout = (params) => {
    return commonWorker("CALL GetPatientDetailsForCheckout(?)", params, 'session.worker.js - getPatientDetailsForCheckout -')
}

const getAllPackagesAndSessionTypes = (params) => {
    return commonWorker("CALL GetAllPackagesAndSessionTypes()", params, 'session.worker.js - getAllPackagesAndSessionTypes -')
}

const checkoutPatient = (params) => {
    return commonWorker("CALL CheckoutPatient(?,?,?,?,?)", params, 'session.worker.js - checkoutPatient -')
}

module.exports = {
    checkInPatient,
    startSession,
    endSession,
    getPatientDetailsForCheckout,
    getAllPackagesAndSessionTypes,
    checkoutPatient
}