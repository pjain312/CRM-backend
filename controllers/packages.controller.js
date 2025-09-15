const service = require("../services/packages.service");
const { getJsonResponse } = require("../utils/common")

const packagesController = (() => {

    const addPackages = async (req, res) => {
        try {
            const { packageName, chargePerSession, totalSession, totalCost } = req.body
            if (!packageName || !chargePerSession || !totalSession || !totalCost ) {
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

    return {
        addPackages,
        updatePackage,
        deletePackage,
        getPackages
    }
})()

module.exports = packagesController
