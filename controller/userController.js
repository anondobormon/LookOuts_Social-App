const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/people");

const addUser = async (req, res, next) => {
  // console.log(req.file);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const userData = {
    username: req.body.firstname + " " + req.body.lastname,
    userEmail: req.body.email,
    password: hashedPassword,
    gender: req.body.gender,
    avatar: req.file.filename,
  };
  try {
    const newUser = await new User(userData);
    await newUser.save();
    res.status(200).redirect("/login");
  } catch (err) {
    next(err.message);
  }
};

module.exports = addUser;
