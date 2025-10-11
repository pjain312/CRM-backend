const service = require("../services/patients.service");
const { getJsonResponse } = require("../utils/common")

    const getPatientDetails = async (req, res) => {
        try {
            const { patientId } = req.query
            if (!patientId) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.getPatientDetails(req)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`patients.controller.js - getPatientDetails - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const getPatientAppointment = async (req, res) => {
        try {
            const { patientId } = req.query
            if (!patientId) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.getPatientAppointment(req)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`patients.controller.js - getPatientAppointment - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const getPatientTransactions = async (req, res) => {
        try {
            const { patientId } = req.query
            if (!patientId) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.getPatientTransactions(req)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`patients.controller.js - getPatientTransactions - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const getPatientPackages = async (req, res) => {
        try {
            const { patientId } = req.query
            if (!patientId) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.getPatientPackages(req)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`patients.controller.js - getPatientPackages - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const payPackageDues = async (req, res) => {
        try {
            const { patientId, patientPackageId, paymentMode, sessionCharges  } = req.body
            if (!patientId || !patientPackageId || !paymentMode || !sessionCharges) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.payPackageDues(req)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`patients.controller.js - payPackageDues - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

module.exports = {
    getPatientDetails,
    getPatientAppointment,
    getPatientTransactions,
    getPatientPackages,
    payPackageDues
}
