const { validateJwt } = require("../middlewares/validateJwt");

const paymentRoutes = (function () {
    "use strict";
  
    const express = require("express"),
      router = express.Router(),
      paymentsController = require("../controllers/payments.controller");
  
    router.route("/getAllPayments").get(validateJwt, paymentsController.getAllPayments);
    router.route("/getTotalMonthlyCollection").get(validateJwt, paymentsController.getTotalMonthlyCollection);

    return router;
  })();
  module.exports = paymentRoutes;
  