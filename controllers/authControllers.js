const User = require("../models/UserModels");
const bcrypt = require("bcryptjs");
const express = require("express");
const app = express();
exports.signUp = async (req, res) => {
  try {
    const { name, password } = req.body;
    const hashPass = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name,
      password: hashPass,
    });
    console.log(newUser);
    res.status(201).json({
      status: "sucess",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error,
    });
  }
};
exports.logIn = async (req, res) => {
  try {
    const { name, password } = req.body;
    const newUser = await User.findOne({
      name
    });
    console.log(newUser)
    const hashPass = await bcrypt.compare(password,newUser.password );
    console.log(newUser);
    res.status(201).json({
      status: "sucess",
      data: {
        user: hashPass,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error,
    });
  }
};
