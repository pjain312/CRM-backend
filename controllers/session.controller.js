const service = require("../services/session.service");
const { getJsonResponse } = require("../utils/common");


const checkInPatient = async (req, res) => {
    try {
        const { patientId, appointmentId } = req.body
        if (!patientId || !appointmentId ) {
            console.log(`session.controller.js - checkInPatient - ${patientId} and ${appointmentId} are required`)
            return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
        }
        else {
            const response = await service.checkInPatient(req.body)
            return res.status(response.status).json(response.data)
        }
    }
    catch (err) {
        console.log(`session.controller.js - checkInPatient - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}

const startSession = async (req, res) => {
    try {
        const { sessionId } = req.body
        if (!sessionId ) {
            console.log(`session.controller.js - startSession - ${sessionId} is required`)
            return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
        }
        else {
            const response = await service.startSession(req.body)
            return res.status(response.status).json(response.data)
        }
    }
    catch (err) {
        console.log(`session.controller.js - startSession - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}

const endSession = async (req, res) => {
    try {
        const { sessionId} = req.body
        if (!sessionId ) {
            console.log(`session.controller.js - endSession - ${sessionId} is required`)
            return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
        }
        else {
            const response = await service.endSession(req.body)
            return res.status(response.status).json(response.data)
        }
    }
    catch (err) {
        console.log(`session.controller.js - endSession - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}

const sessionCharges = async (req, res) => {
    try {
        const { sessionId, amount, paymentMode } = req.body
        if (!sessionId || !amount || !paymentMode ) {
            console.log(`session.controller.js - sessionCharges - ${sessionId} and ${amount} and ${paymentMode} are required`)
            return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
        }
        else {
            const response = await service.sessionCharges(req.body)
            return res.status(response.status).json(response.data)
        }
    }
    catch (err) {
        console.log(`session.controller.js - sessionCharges - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}

module.exports = {
    checkInPatient,
    startSession,
    endSession,
    sessionCharges
}