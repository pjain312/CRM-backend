const { validateJwt } = require("../middlewares/validateJwt");

const patientLeadsRoutes = (function () {
  "use strict";

  const express = require("express"),
    router = express.Router(),
    patientLeadsController = require("../controllers/patientLeads.controller");

  router.route("/addPatientLeads").post(validateJwt, patientLeadsController.addPatientLeads);
  router.route("/getPatientLeads").get(validateJwt, patientLeadsController.getPatientLeads);
  router.route("/getLeadsDetailsOptions").get(validateJwt, patientLeadsController.getLeadsDetailsOptions);
  router.route("/updatePatientLeads").post(validateJwt, patientLeadsController.updatePatientLeads);
  router.route("/getRegisteredPatients").get(validateJwt,patientLeadsController.getRegisteredPatients);
  router.route("/getLeadDetailsForFollowUp").get(validateJwt, patientLeadsController.getLeadDetailsForFollowUp);
  router.route("/addLeadsFollowUp").post(validateJwt, patientLeadsController.addLeadsFollowUp);
  router.route("/closePatient").post(validateJwt, patientLeadsController.closePatient);
  router.route("/reopenPatient").post(validateJwt, patientLeadsController.reopenPatient);


  return router;
})();
module.exports = patientLeadsRoutes;
