const sessionRoutes = (function () {
    "use strict";
  
    const express = require("express"),
      router = express.Router(),
      sessionController = require("../controllers/session.controller");
  
    router.route("/checkInPatient").post(sessionController.checkInPatient);
    router.route("/startSession").put(sessionController.startSession);
    router.route("/endSession").put(sessionController.endSession);
    router.route("/sessionCharges").put(sessionController.sessionCharges);


    return router;
  })();
  module.exports = sessionRoutes;
  