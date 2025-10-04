const { validateJwt } = require("../middlewares/validateJwt");

const appointmentRoutes = (function () {
    "use strict";
  
    const express = require("express"),
      router = express.Router(),
      appointmentsController = require("../controllers/appointment.controller");
  
    router.route("/getAppointmentDefaultOptions").get(validateJwt, appointmentsController.getAppointmentDefaultOptions);
    router.route("/addAppointment").post(validateJwt, appointmentsController.addAppointment);
    router.route("/getAllAppointments").get(validateJwt, appointmentsController.getAllAppointments);
    router.route("/updateAppointment").post(validateJwt, appointmentsController.updateAppointment);
    router.route("/getPendingCounts").get(validateJwt, appointmentsController.getPendingCounts);
    router.route("/getAllTimeSlots").get(validateJwt, appointmentsController.getAllTimeSlots);
  
    return router;
  })();
  module.exports = appointmentRoutes;
  