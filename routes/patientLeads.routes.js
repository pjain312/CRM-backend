const patientLeadsRoutes = (function () {
  "use strict";

  const express = require("express"),
    router = express.Router(),
    patientLeadsController = require("../controllers/patientLeads.controller");

  router.route("/addPatientLeads").post(patientLeadsController.addPatientLeads);
  router.route("/getPatientLeads").get(patientLeadsController.getPatientLeads);
  router.route("/getLeadsDetailsOptions").get(patientLeadsController.getLeadsDetailsOptions);
  router.route("/updatePatientLeads").post(patientLeadsController.updatePatientLeads);
  router.route("/getRegisteredPatients").get(patientLeadsController.getRegisteredPatients);
  router.route("/getLeadDetailsForFollowUp").get(patientLeadsController.getLeadDetailsForFollowUp);
  router.route("/addLeadsFollowUp").post(patientLeadsController.addLeadsFollowUp);
  router.route("/closePatient").post(patientLeadsController.closePatient);

  return router;
})();
module.exports = patientLeadsRoutes;
