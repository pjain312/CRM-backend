
const worker = require("../worker/patientLeads.worker");

const { getJsonResponse } = require("../utils/common");
const addPatientLeads = async (req) => {
    const { name, age, gender, phoneNumber, email, address, city, state, country, pincode, leadType, physioPreference,
        leadSource, leadStatus, condition, treatment, assignedTo} = req.body;
        const createdBy = req.user.id;
    const params = [name, age, gender, phoneNumber, email, address, city, state, country, pincode, leadType, physioPreference,
        leadSource, leadStatus, condition, treatment, createdBy, assignedTo]
    const response = await worker.addPatientLeads(params)
    if (response.queryErr) {
        console.log(`patientLeads.service-js - addPatientLeads - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, [], null, null) }
    }
}

const updatePatientLeads = async (req) => {
    const { id, name, age, gender, phoneNumber, email, address, city, state, country, pincode, leadType, physioPreference,
        leadSource, leadStatus, condition, treatment, assignedTo } = req.body;
        const updatedBy = req.user.id;
    const params = [id, name, age, gender, phoneNumber, email, address, city, state, country, pincode, leadType, physioPreference,
        leadSource, leadStatus, condition, treatment, assignedTo, updatedBy]
    const response = await worker.updatePatientLeads(params)
    if (response.queryErr) {
        console.log(`patientLeads.service-js - updatePatientLeads - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, [], null, null) }
    }
}

const getPatientLeads = async (reqQuery) => {
    const {date} = reqQuery
    const response = await worker.getPatientLeads([date])
    if (response.queryErr) {
        console.log(`patientLeads.service-js - getPatientLeads - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, response.queryRes[0], null, null) }
    }
}

const getRegisteredPatients = async (req) => {
    const userId = req.user.id;
    const response = await worker.getRegisteredPatients([userId])
    if (response.queryErr) {
        console.log(`patientLeads.service-js - getRegisteredPatients - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, response.queryRes[0], null, null) }
    }
}

const getLeadsDetailsOptions = async () => {
    const response = await worker.getLeadsDetailsOptions()
    if (response.queryErr) {
        console.log(`patientLeads.service-js - getLeadsDetailsOptions - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        const res = {
            clinicList: response.queryRes[0],
            genders: response.queryRes[1],
            leadTypes: response.queryRes[2],
            leadSource: response.queryRes[3],
            leadStatus: response.queryRes[4],
            physioPreference: response.queryRes[5],
            treatmentType: response.queryRes[6]
        }
        return { status: 200, data: getJsonResponse(true, res, null, null) }
    }
}

const getLeadDetailsForFollowUp = async (reqQuery) => {
    const {id} = reqQuery
    const response = await worker.getLeadDetailsForFollowUp([id])
    if (response.queryErr) {
        console.log(`patientLeads.service-js - getLeadDetailsForFollowUp - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, response.queryRes[0] ? response.queryRes[0][0]: null, null, null) }
    }
}

const addLeadsFollowUp = async (req) => {
    const { leadId, followUpComment, nextFollowUpDate } = req.body;
    const createdBy = req.user.id;
    const params = [leadId, followUpComment, nextFollowUpDate, createdBy]
    const response = await worker.addLeadsFollowUp(params)
    if (response.queryErr) {
        console.log(`patientLeads.service-js - addLeadsFollowUp - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, [], null, null) }
    }
}
    
const closePatient = async (reqBody) => {
    const { patientId, closeReason } = reqBody;
    const params = [patientId, closeReason]
    const response = await worker.closePatient(params)
    if (response.queryErr) {
        console.log(`patientLeads.service-js - closePatient - ${response.queryErr}`)
        return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
    }

    if (response.queryRes) {
        return { status: 200, data: getJsonResponse(true, [], null, null) }
    }
}

module.exports = {
    addPatientLeads,
    getPatientLeads,
    getRegisteredPatients,
    getLeadsDetailsOptions,
    updatePatientLeads,
    getLeadDetailsForFollowUp,
    addLeadsFollowUp,
    closePatient
}