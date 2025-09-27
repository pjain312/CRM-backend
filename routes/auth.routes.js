
"use strict";

const express = require("express"),
router = express.Router(),
authController = require("../controllers/auth.controller");

router.route("/register").post(authController.registerUser);

router.route("/login").post(authController.loginUser);

router.route("/refresh").post(authController.verifyRefreshToken);
router.route("/logout").post(authController.logoutUser);


module.exports = router;
  