const { validateJwt } = require("../middlewares/validateJwt");
const userRoutes = (function () {
    "use strict";
  
    const express = require("express"),
      router = express.Router(),
      controller = require("../controllers/user.controller");
  
    router.route("/userDetails").get(validateJwt, controller.userDetails);
  
    return router;
  })();
  module.exports = userRoutes;
  