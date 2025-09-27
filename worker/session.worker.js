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

const sessionCharges = (params) => {
    return commonWorker("CALL SessionCharges(?,?,?)", params, 'session.worker.js - sessionCharges -')
}

module.exports = {
    checkInPatient,
    startSession,
    endSession,
    sessionCharges
}