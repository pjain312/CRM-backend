const { validateJwt } = require("../middlewares/validateJwt");

const sessionRoutes = (function () {
    "use strict";
  
    const express = require("express"),
      router = express.Router(),
      sessionController = require("../controllers/session.controller");
  
    router.route("/checkInPatient").post(validateJwt, sessionController.checkInPatient);
    router.route("/startSession").put(validateJwt, sessionController.startSession);
    router.route("/endSession").put(validateJwt,sessionController.endSession);
    router.route("/checkoutPatient").put(validateJwt,sessionController.checkoutPatient);
    router.route("/undoCheckin").post(validateJwt,sessionController.undoCheckin);
    router.route("/getPatientDetailsForCheckout").get(validateJwt,sessionController.getPatientDetailsForCheckout);
    router.route("/getAllPackagesAndSessionTypes").get(validateJwt,sessionController.getAllPackagesAndSessionTypes);

    return router;
  })();
  module.exports = sessionRoutes;
  