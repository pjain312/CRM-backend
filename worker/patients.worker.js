const { commonWorker } = require("../utils/common")

const patientsWorker = (() => {

    const getPatientDetails = (params) => {
        return commonWorker("CALL getPatientDetails(?)", params, 'patients.worker.js - getPatientDetails -')
    }

    const getPatientAppointment = (params) => {
        return commonWorker("CALL GetPatientAppointment(?)", params, 'patients.worker.js - getPatientAppointment -')
    }

    const getPatientTransactions = (params) => {
        return commonWorker("CALL GetPatientTransactions(?)", params, 'patients.worker.js - getPatientTransactions -')
    }

    const getPatientPackages = (params) => {
        return commonWorker("CALL GetPatientPackages(?)", params, 'patients.worker.js - getPatientPackages -')
    }

    const payPackageDues = (params) => {
        return commonWorker("CALL PayDueForPackage(?,?,?,?)", params, 'patients.worker.js - payPackageDues -')
    }

    return { 
        getPatientDetails,
        getPatientAppointment,
        getPatientTransactions,
        getPatientPackages,
        payPackageDues
    }
})();

module.exports = patientsWorker