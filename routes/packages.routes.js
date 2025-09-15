const patientLeadsRoutes = (function () {
    "use strict";
  
    const express = require("express"),
      router = express.Router(),
      controller = require("../controllers/packages.controller");
  
    router.route("/addPackage").post(controller.addPackages);
    router.route("/updatePackage").put(controller.updatePackage);
    router.route("/deletePackage").delete(controller.deletePackage);
    router.route("/getPackages").get(controller.getPackages);
  
    return router;
  })();
  module.exports = patientLeadsRoutes;
  