const { validateJwt } = require("../middlewares/validateJwt");

const patientLeadsRoutes = (function () {
    "use strict";
  
    const express = require("express"),
      router = express.Router(),
      controller = require("../controllers/packages.controller");
  
    router.route("/addPackage").post(validateJwt, controller.addPackages);
    router.route("/addSessionTypes").post(validateJwt, controller.addSessionTypes);
    router.route("/updatePackage").put(validateJwt, controller.updatePackage);
    router.route("/updateSessionType").put(validateJwt, controller.updateSessionType);
    router.route("/deletePackage").delete(validateJwt, controller.deletePackage);
    router.route("/deleteSessionType").delete(validateJwt, controller.deleteSessionType);
    router.route("/getPackages").get(validateJwt, controller.getPackages);
    router.route("/getSessionTypes").get(validateJwt, controller.getSessionTypes);
    router.route("/getPackageInvoiceData").get(validateJwt, controller.getPackageInvoiceData);
    router.route("/getDailyInvoiceData").get(validateJwt, controller.getDailyInvoiceData);
    router.route("/getProductInvoiceData").get(validateJwt, controller.getProductInvoiceData);
  
    return router;
  })();
  module.exports = patientLeadsRoutes;
  