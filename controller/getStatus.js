const Status = require("../models/statusSchema");
const User = require("../models/people");

// Get all the status from server
async function getStatus(req, res, next) {
  const status = await Status.find({}).populate("userId");
  const user = await User.find({}).populate("status");
  // console.log(user);
  res.render("home", { status: status, users: user });
}

module.exports = getStatus;
