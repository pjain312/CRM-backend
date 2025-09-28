const patientLeadsRoutes = (function () {
    "use strict";
  
    const express = require("express"),
      router = express.Router(),
      controller = require("../controllers/packages.controller");
  
    router.route("/addPackage").post(controller.addPackages);
    router.route("/addSessionTypes").post(controller.addSessionTypes);
    router.route("/updatePackage").put(controller.updatePackage);
    router.route("/updateSessionType").put(controller.updateSessionType);
    router.route("/deletePackage").delete(controller.deletePackage);
    router.route("/deleteSessionType").delete(controller.deleteSessionType);
    router.route("/getPackages").get(controller.getPackages);
    router.route("/getSessionTypes").get(controller.getSessionTypes);
    router.route("/getPackageInvoiceData").get(controller.getPackageInvoiceData);
    router.route("/getDailyInvoiceData").get(controller.getDailyInvoiceData);
  
    return router;
  })();
  module.exports = patientLeadsRoutes;
  