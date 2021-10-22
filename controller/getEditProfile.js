const User = require("../models/people");

const getEditProfile = async (req, res, next) => {
  try {
    const userData = await User.findOne({ _id: req.userId });
    if (userData) {
      res.status(200).render("editProfile", { user: userData });
    } else {
      res.status(500).render("error");
    }
  } catch (err) {
    res.status(500).render("error", { error: err });
  }
};
module.exports = getEditProfile;
