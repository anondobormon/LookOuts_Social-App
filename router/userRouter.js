const express = require("express");

// const upload = require("../utilities/singleUploads");
const avatarUpload = require("../middleware/users/avatarUpload");
const statusImageUpload = require("../middleware/users/statusImageUpload");
const addUser = require("../controller/userController");
const statusController = require("../controller/statusController");
const getStatus = require("../controller/getStatus");
const profileModify = require("../controller/profileModify");
const getProfile = require("../controller/getProfile");
const getEditProfile = require("../controller/getEditProfile");

const {
  userValidator,
  manageAvatar,
} = require("../middleware/users/userValidator");
const checkLogin = require("../middleware/checkLogin");

const router = express.Router();

router.get("/", checkLogin, getStatus);

// User sign up controller
router.post("/", avatarUpload, userValidator, manageAvatar, addUser);

//Render Home page and create post router
// router.get("/home", checkLogin, getStatus);

// Post a status message
router.post("/", checkLogin, statusImageUpload, statusController);

// Get profile information
router.get("/profile", checkLogin, getProfile);

//Get profile modify
router.get("/profile-update", checkLogin, getEditProfile);

router.post("/profile-update", checkLogin, profileModify);

module.exports = router;
