const service = require("../services/packages.service");
const { getJsonResponse } = require("../utils/common")

const packagesController = (() => {

    const addPackages = async (req, res) => {
        try {
            const { packageName, chargePerSession, chargePerSessionForPackage, totalSession, totalCost } = req.body
            if (!packageName || !chargePerSession || !chargePerSessionForPackage || !totalSession || !totalCost ) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.addPackages(req.body)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`packages.controller.js - addPackages - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const addSessionTypes = async (req, res) => {
        try {
            const { sessionName, chargePerSession } = req.body
            if (!sessionName || !chargePerSession ) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.addSessionTypes(req.body)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`packages.controller.js - addSessionTypes - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const updatePackage = async (req, res) => {
        try {
            const { packageId } = req.body
            if (!packageId ) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.updatePackage(req.body)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`packages.controller.js - updatePackage - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const updateSessionType = async (req, res) => {
        try {
            const { sessionId } = req.body
            if (!sessionId ) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.updateSessionType(req.body)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`packages.controller.js - updateSessionType - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const deletePackage = async (req, res) => {
        try {
            const { packageId } = req.body
            if (!packageId ) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.deletePackage(req.body)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`packages.controller.js - deletePackage - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const deleteSessionType = async (req, res) => {
        try {
            const { sessionId } = req.body
            if (!sessionId ) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.deleteSessionType(req.body)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`packages.controller.js - deleteSessionType - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const getPackages = async (req, res) => {
        try {
                const response = await service.getPackages()
                return res.status(response.status).json(response.data)
        }
        catch (err) {
            console.log(`packages.controller.js - getPackages - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const getSessionTypes = async (req, res) => {
        try {
                const response = await service.getSessionTypes()
                return res.status(response.status).json(response.data)
        }
        catch (err) {
            console.log(`packages.controller.js - getSessionTypes - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const getPackageInvoiceData = async (req, res) => {
        try {
            const { patientId } = req.query
            if (!patientId ) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.getPackageInvoiceData(req.query)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`packages.controller.js - getPackageInvoiceData - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    const getDailyInvoiceData = async (req, res) => {
        try {
            const { patientId, appointmentId } = req.query
            if (!patientId || !appointmentId ) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.getDailyInvoiceData(req.query)
                return res.status(response.status).json(response.data)
            }
        }
        catch (err) {
            console.log(`packages.controller.js - getDailyInvoiceData - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    return {
        addPackages,
        addSessionTypes,
        updatePackage,
        updateSessionType,
        deletePackage,
        getPackages,
        getSessionTypes,
        deleteSessionType,
        getPackageInvoiceData,
        getDailyInvoiceData
    }
})()

module.exports = packagesController
