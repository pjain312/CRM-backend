const service = require("../services/appointment.service");
const { getJsonResponse } = require("../utils/common")

const appointmentsController = (() => {

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
            const { patientId, appointmentDate, appointmentTime, appointmentType, status } = req.body
            if (!patientId || !appointmentDate || !appointmentTime || !appointmentType || !status ) {
                return res.status(400).json(getJsonResponse(false, [], "invalid request", null))
            }
            else {
                const response = await service.addAppointment(req.body)
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
                const response = await service.getAllAppointments(req.query)
                return res.status(response.status).json(response.data)
            }
        catch (err) {
            console.log(`appointment.controller.js - getAllAppointments - ${err.message}`)
            return res.status(500).json(getJsonResponse(false, [], null, err.message))
        }
    }

    return {
        getAppointmentDefaultOptions,
        addAppointment,
        getAllAppointments
    }
})()

module.exports = appointmentsController
