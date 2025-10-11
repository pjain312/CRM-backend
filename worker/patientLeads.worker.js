const { commonWorker } = require("../utils/common")

const patientLeadsWorker = (() => {
    const addPatientLeads = (params) => {
        return commonWorker("CALL AddPatientLeads(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", params, 'patientLeads.worker.js - addPatientLeads -')
    }

    const getPatientLeads = (params) => {
        return commonWorker("CALL GetPatientLeads(?)", params, 'patientLeads.worker.js - getPatientLeads -')
    }

    const getRegisteredPatients = (params) => {
        return commonWorker("CALL GetRegisteredPatients(?)", params, 'patientLeads.worker.js - getRegisteredPatients -')
    }

    const getLeadsDetailsOptions = (params) => {
        return commonWorker("CALL GetLeadsDetailsOptions()", params, 'patientLeads.worker.js - getLeadsDetailsOptions -')
    }

    const getLeadDetailsForFollowUp = (params) => {
        return commonWorker("CALL GetLeadDetailsForFollowUp(?)", params, 'patientLeads.worker.js - getLeadDetailsForFollowUp -')
    }

    const updatePatientLeads = (params) => {
        return commonWorker("CALL UpdatePatientLeads(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", params, 'patientLeads.worker.js - updatePatientLeads -')
    }
    
    const addLeadsFollowUp = (params) => {
        return commonWorker("CALL AddLeadsFollowUp(?,?,?,?)", params, 'patientLeads.worker.js - addLeadsFollowUp -')
    }

    const closePatient = (params) => {
        return commonWorker("CALL ClosePatient(?,?)", params, 'patientLeads.worker.js - closePatient -')
    }

    const reopenPatient = (params) => {
        return commonWorker("CALL ReopenPatient(?)", params, 'patientLeads.worker.js - reopenPatient -')
    }

    return { 
        addPatientLeads, 
        getPatientLeads,
        getRegisteredPatients,
        getLeadsDetailsOptions,
        updatePatientLeads,
        getLeadDetailsForFollowUp,
        addLeadsFollowUp,
        closePatient,
        reopenPatient
    }
})();

module.exports = patientLeadsWorker