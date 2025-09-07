const { commonWorker } = require("../utils/common")

const appointmentsWorker = (() => {
    const getAppointmentDefaultOptions = (params) => {
        return commonWorker("CALL GetAppointmentDefaultOptions()", params, 'appointment.worker.js - getAppointmentDefaultOptions -')
    }

    const addAppointment = (params) => {
        return commonWorker("CALL AddAppointment(?,?,?,?,?,?,?)", params, 'appointment.worker.js - addAppointment -')
    }

    const getAllAppointments = (params) => {
        return commonWorker("CALL GetAllAppointments(?,?)", params, 'appointment.worker.js - getAllAppointments -')
    }


    return { 
        getAppointmentDefaultOptions,
        addAppointment,
        getAllAppointments
    }
})();

module.exports = appointmentsWorker