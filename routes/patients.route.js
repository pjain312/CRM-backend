const { validateJwt } = require("../middlewares/validateJwt");

const patientLeadsRoutes = (function () {
  "use strict";

  const express = require("express"),
    router = express.Router(),
    patientLeadsController = require("../controllers/patients.controller");

  router.route("/getPatientDetails").get(validateJwt, patientLeadsController.getPatientDetails);
  router.route("/getPatientAppointment").get(validateJwt, patientLeadsController.getPatientAppointment);
  router.route("/getPatientTransactions").get(validateJwt, patientLeadsController.getPatientTransactions);
  router.route("/getPatientPackages").get(validateJwt, patientLeadsController.getPatientPackages);
  router.route("/payPackageDues").post(validateJwt, patientLeadsController.payPackageDues);

  return router;
})();
module.exports = patientLeadsRoutes;
