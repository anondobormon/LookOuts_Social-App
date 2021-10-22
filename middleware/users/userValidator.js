const { check, validationResult } = require("express-validator");
const path = require("path");
const { unlink } = require("fs");
const User = require("../../models/people");

const userValidator = [
  //validation for email address
  check("email")
    .isEmail()
    .trim()
    .withMessage("Invalid email address")
    .custom(async (value) => {
      try {
        const user = await User.findOne({ userEmail: value });
        if (user) {
          throw new Error("Email already exists!");
        }
      } catch (err) {
        throw new Error(err.message);
      }
    }),
  //validation for password fields
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at leas 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
    ),
];

const manageAvatar = (req, res, next) => {
  try {
    validationResult(req).throw();
    next();
  } catch (err) {
    //remove upload files from server
    if (req.file) {
      const { filename } = req.file;
      console.log(req.upload_path);
      unlink(
        path.join(__dirname, `/../.${req.upload_path}/${filename}`),
        (error) => {
          res.status(500).send(err.mapped());
        }
      );
    } else {
      res.status(500).send(err.mapped());
    }
  }
};

module.exports = { userValidator, manageAvatar };
