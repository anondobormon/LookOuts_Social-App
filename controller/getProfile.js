//External imports
const User = require("../models/people");

// internal imports

const getProfile = async (req, res, next) => {
  try {
    const userData = await User.findOne({ _id: req.userId }).populate("post");
    console.log(userData);
    if (userData) {
      res.status(200).render("profile", { user: userData });
    } else {
      res.status(500).render("error", err);
    }
  } catch (err) {
    console.log("Error");
    res.status(500).render("error", err);
  }
};

module.exports = getProfile;
