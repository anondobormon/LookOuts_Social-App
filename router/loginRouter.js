//External imports
const express = require("express");

// internal imports
const { loginController, getLogin } = require("../controller/loginController");

const router = express.Router();

router.get("/", getLogin);

//Login  controller
router.post("/", loginController);

module.exports = router;
