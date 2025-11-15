
const worker = require("../worker/appointment.worker");

const appointmentsService = (() => {
    const { getJsonResponse } = require("../utils/common");

    const getAppointmentDefaultOptions = async () => {
        const response = await worker.getAppointmentDefaultOptions()
        if (response.queryErr) {
            console.log(`appointment.service-js - getAppointmentDefaultOptions - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }

        if (response.queryRes) {
            const res = {
                appointmentTypes: response.queryRes[0]? response.queryRes[0] : [],
                appointmentStatusList: response.queryRes[1]? response.queryRes[1] : [],
                physioList: response.queryRes[2]? response.queryRes[2] : []
            }
            return { status: 200, data: getJsonResponse(true, res, null, null) }
        }
    }

    const addAppointment = async (req) => {
        const { patientId, appointmentDate, appointmentTime, status, appointmentType, comments, physio } = req.body;
        const createdBy = req.user.id;
        const params = [patientId, appointmentDate, appointmentTime, status, appointmentType, comments, physio, createdBy ]
        const response = await worker.addAppointment(params)
        if (response.queryErr) {    
            console.log(`appointment.service-js - addAppointment - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }
        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, [], null, null) }
        }
    }

    const getAllAppointments = async (req) => {
        const {patientId, appointmentDate} = req.query
        const userId = req.user.id
        const response = await worker.getAllAppointments([patientId, appointmentDate, userId])
        if (response.queryErr) {
            console.log(`appointment.service-js - getAllAppointments - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }

        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes[0], null, null) }
        }
    }

    const updateAppointment = async (req) => {
        const { appointmentId, comments, status, appointmentTime, appointmentDate } = req.body;
        const updatedBy = req.user.id;
        const params = [appointmentId, comments, status, appointmentTime, appointmentDate, updatedBy]
        const response = await worker.updateAppointment(params)
        if (response.queryErr) {
            console.log(`appointment.service-js - updateAppointment - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }
        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, [], null, null) }
        }


    }



    const getPendingCounts = async (req) => {
        const userId = req.user.id
        const response = await worker.getPendingCounts([userId])
        if (response.queryErr) {
            console.log(`appointment.service-js - getPendingCounts - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }
        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes[0].length> 0 ? response.queryRes[0][0] : {}, null, null) }
        }
    }

    const getAllTimeSlots = async (req) => {
        const response = await worker.getAllTimeSlots()
        if (response.queryErr) {
            console.log(`appointment.service-js - getAllTimeSlots - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }
        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes[0] ? response.queryRes[0] : [], null, null) }
        }
    }

    return {
        getAppointmentDefaultOptions,
        addAppointment,
        getAllAppointments,
        updateAppointment,
        getPendingCounts,
        getAllTimeSlots
    }
})();


module.exports = appointmentsService