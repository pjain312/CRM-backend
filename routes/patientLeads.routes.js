const patientLeadsRoutes = (function () {
  "use strict";

  const express = require("express"),
    router = express.Router(),
    patientLeadsController = require("../controllers/patientLeads.controller");
  // { sanitizeReqQuery, sanitizeReqBody } = require('../middlewares/sanitizer.middleware');

  router.route("/addPatientLeads").post(patientLeadsController.addPatientLeads);
  router.route("/getPatientLeads").get(patientLeadsController.getPatientLeads);

  return router;
})();
module.exports = patientLeadsRoutes;
