const express = require("express");
const bcrypt = require("bcrypt");
const { userModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  // Logic for register

  const { name, email, password } = req.body;

  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (hash) {
        const newUser = new userModel({ name, email, password: hash });
        await newUser.save();
        res.send({ msg: "New user Created successfully" });
      } else {
        res.send({ msg: "something went wrong" });
      }
    });
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

userRouter.post("/login", async (req, res) => {
  // Logic for login
  const { email, password } = req.body;

  const oldUser = await userModel.find({ email }); // name email password

  if (oldUser.length > 0) {
    // Load hash from your password DB.
    bcrypt.compare(myPlaintextPassword, oldUser[0].password, (err, result) => {
      // result == true
      if (result) {
        const token = jwt.sign({ chintu: "mintu" }, "pintu"); // pintu  is secret pass
        res.send({ msg: "login success " });
      } else {
        res.send({ msg: "wrong password" });
      }
    });
  } else {
    res.send({ msg: "Account Not Found, Please Register first" });
  }

  res.send({ msg: "Login success" });
});

module.exports = { userRouter };

userRouter.post("/register", async (req, res) => {
  // Logic for register

  const { name, email, password } = req.body;

  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (hash) {
        const newUser = new userModel({ name, email, password: hash });
        await newUser.save();
        res.send({ msg: "New user Created successfully" });
      } else {
        res.send({ msg: "something went wrong" });
      }
    });
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});