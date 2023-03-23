const express = require("express");
const User = require("../models/UserModels");
const bcrypt = require("bcryptjs");
const router = express.Router();
const userModel = require("../controllers/authControllers");

router.route("/").post(userModel.signUp)
router.route("/log").post(userModel.logIn)

module.exports = router;