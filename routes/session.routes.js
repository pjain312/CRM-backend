const sessionRoutes = (function () {
    "use strict";
  
    const express = require("express"),
      router = express.Router(),
      sessionController = require("../controllers/session.controller");
  
    router.route("/checkInPatient").post(sessionController.checkInPatient);
    router.route("/startSession").put(sessionController.startSession);
    router.route("/endSession").put(sessionController.endSession);
    router.route("/sessionCharges").put(sessionController.sessionCharges);
    router.route("/checkoutPatient").put(sessionController.checkoutPatient);
    router.route("/getPatientDetailsForCheckout").get(sessionController.getPatientDetailsForCheckout);
    router.route("/getAllPackagesAndSessionTypes").get(sessionController.getAllPackagesAndSessionTypes);

    return router;
  })();
  module.exports = sessionRoutes;
  