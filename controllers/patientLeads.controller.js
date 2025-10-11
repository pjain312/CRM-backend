const service = require("../services/patientLeads.service");
const { getJsonResponse } = require("../utils/common")

    const addPatientLeads = async (req, res) => {
        try {
            const { name, age, phoneNumber, pincode } = req.body
            if (!name || !age || !phoneNumber || !pincode) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.addPatientLeads(req)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`patientLeads.controller.js - addPatientLeads - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const updatePatientLeads = async (req, res) => {
        try {
            const { id } = req.body
            if (!id) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.updatePatientLeads(req)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`patientLeads.controller.js - updatePatientLeads - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const getPatientLeads = async (req, res) => {
        try {
            const response = await service.getPatientLeads(req.query)
            return res.status(response.status).json(response.data)
        }
        catch (err) {
            console.log(`patientLeads.controller.js - getPatientLeads - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const getRegisteredPatients = async (req, res) => {
        try {
            const response = await service.getRegisteredPatients(req)
            return res.status(response.status).json(response.data)
        }
        catch (err) {
            console.log(`patientLeads.controller.js - getRegisteredPatients - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const getLeadsDetailsOptions = async (req, res) => {
        try {
            const response = await service.getLeadsDetailsOptions(req.query)
            return res.status(response.status).json(response.data)
        }
        catch (err) {
            console.log(`patientLeads.controller.js - getLeadsDetailsOptions - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const getLeadDetailsForFollowUp = async (req, res) => {
        try {
            const { id } = req.query
            if (!id) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.getLeadDetailsForFollowUp(req.query)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`patientLeads.controller.js - getLeadDetailsForFollowUp - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const addLeadsFollowUp = async (req, res) => {
        try {
            const { leadId, followUpComment } = req.body
            if (!leadId || !followUpComment ) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.addLeadsFollowUp(req)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`patientLeads.controller.js - addLeadsFollowUp - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const closePatient = async (req, res) => {
        try {
            const { patientId, closeReason } = req.body
            if (!patientId || !closeReason ) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.closePatient(req.body)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`patientLeads.controller.js - closePatient - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const reopenPatient = async (req, res) => {
        try {
            const { patientId } = req.body
            if (!patientId ) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.reopenPatient(req.body)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`patientLeads.controller.js - reopenPatient - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
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
    closePatient,
    reopenPatient
}
