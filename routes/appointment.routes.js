const appointmentRoutes = (function () {
    "use strict";
  
    const express = require("express"),
      router = express.Router(),
      appointmentsController = require("../controllers/appointment.controller");
  
    router.route("/getAppointmentDefaultOptions").get(appointmentsController.getAppointmentDefaultOptions);
    router.route("/addAppointment").post(appointmentsController.addAppointment);
    router.route("/getAllAppointments").get(appointmentsController.getAllAppointments);
  
    return router;
  })();
  module.exports = appointmentRoutes;
  