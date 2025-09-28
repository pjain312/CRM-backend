
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

    const addAppointment = async (reqBody) => {
        const { patientId, appointmentDate, appointmentTime, status, appointmentType, comments, physio, createdBy } = reqBody;
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

    const getAllAppointments = async (reqQuery) => {
        const {patientId, appointmentDate} = reqQuery
        const response = await worker.getAllAppointments([patientId, appointmentDate])
        if (response.queryErr) {
            console.log(`appointment.service-js - getAllAppointments - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }

        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes[0], null, null) }
        }
    }

    const updateAppointment = async (reqBody) => {
        const { appointmentId, comments, status, appointmentTime } = reqBody;
        const params = [appointmentId, comments, status, appointmentTime]
        const response = await worker.updateAppointment(params)
        if (response.queryErr) {
            console.log(`appointment.service-js - updateAppointment - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }
        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, [], null, null) }
        }
    }

    return {
        getAppointmentDefaultOptions,
        addAppointment,
        getAllAppointments,
        updateAppointment
    }
})();


module.exports = appointmentsService