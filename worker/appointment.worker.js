const { commonWorker } = require("../utils/common")

const appointmentsWorker = (() => {
    const getAppointmentDefaultOptions = (params) => {
        return commonWorker("CALL GetAppointmentDefaultOptions()", params, 'appointment.worker.js - getAppointmentDefaultOptions -')
    }

    const addAppointment = (params) => {
        return commonWorker("CALL AddAppointment(?,?,?,?,?,?,?,?)", params, 'appointment.worker.js - addAppointment -')
    }

    const getAllAppointments = (params) => {
        return commonWorker("CALL GetAllAppointments(?,?,?)", params, 'appointment.worker.js - getAllAppointments -')
    }

    const updateAppointment = (params) => {
        return commonWorker("CALL UpdateAppointment(?,?,?,?,?)", params, 'appointment.worker.js - updateAppointment -')
    }

    const getPendingCounts = (params) => {
        return commonWorker("CALL GetPendingCounts(?)", params, 'appointment.worker.js - getPendingCounts -')
    }

    const getAllTimeSlots = (params) => {
        return commonWorker("CALL GetAllTimeSlots()", params, 'appointment.worker.js - getAllTimeSlots -')
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

module.exports = appointmentsWorker