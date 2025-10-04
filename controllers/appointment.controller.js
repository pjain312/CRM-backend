const service = require("../services/appointment.service");
const { getJsonResponse } = require("../utils/common")



const getAppointmentDefaultOptions = async (req, res) => {
    try {
        const response = await service.getAppointmentDefaultOptions(req.query)
        return res.status(response.status).json(response.data)
    }
    catch (err) {
        console.log(`appointment.controller.js - getAppointmentDefaultOptions - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}

const addAppointment = async (req, res) => {
    try {
        const { patientId, appointmentDate, appointmentType, status } = req.body
        if (!patientId || !appointmentDate || !appointmentType || !status ) {
            return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
        }
        else {
            const response = await service.addAppointment(req)
            return res.status(response.status).json(response.data)
        }
    }
    catch (err) {
        console.log(`appointment.controller.js - addAppointment - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}

const getAllAppointments = async (req, res) => {
    try {
            const response = await service.getAllAppointments(req)
            return res.status(response.status).json(response.data)
        }
    catch (err) {
        console.log(`appointment.controller.js - getAllAppointments - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}

const updateAppointment = async (req, res) => {
    try {
        const { appointmentId, comments } = req.body
        if (!appointmentId || !comments ) {
            console.log(`appointment.controller.js - updateAppointment - ${appointmentId} and ${comments} are required`);
            return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
        }
        else {
            const response = await service.updateAppointment(req)
            return res.status(response.status).json(response.data)
        }
    }
    catch (err) {
        console.log(`appointment.controller.js - updateAppointment - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}

const getPendingCounts = async (req, res) => {
    try {
        const response = await service.getPendingCounts(req)
        return res.status(response.status).json(response.data)
    }
    catch (err) {
        console.log(`appointment.controller.js - getPendingCounts - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}

const getAllTimeSlots = async (req, res) => {
    try {
        const response = await service.getAllTimeSlots(req)
        return res.status(response.status).json(response.data)
    }
    catch (err) {
        console.log(`appointment.controller.js - getAllTimeSlots - ${err.message}`)
        return res.status(500).json(getJsonResponse(false, [], null, err.message))
    }
}

module.exports = {
    getAppointmentDefaultOptions,
    addAppointment,
    getAllAppointments,
    updateAppointment,
    getPendingCounts,
    getAllTimeSlots
}
