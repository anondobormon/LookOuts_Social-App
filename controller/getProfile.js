//External imports
const User = require("../models/people");

// internal imports

const getProfile = async (req, res, next) => {
  const user = await User.findOne({ _id: req.userId }).populate("status");
  console.log(user);
  try {
    const userData = await User.findOne({ _id: req.userId }).populate(
      "status",
      "status_text"
    );

    if (userData) {
      // console.log(userData);
      res.status(200).render("profile", { user: userData });
    } else {
      res.status(500).render("error", err);
    }
  } catch (err) {
    res.status(500).render("error", err);
  }
};

module.exports = getProfile;
