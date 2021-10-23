const Status = require("../models/statusSchema");
const User = require("../models/people");

//Post an status
async function uploadStatus(req, res, next) {
  const statusData = {
    status_text: req.body.status,
    image: req.file?.filename,
    userId: req.userId,
  };
  const newStatus = Status(statusData);
  console.log(newStatus);
  const data = await newStatus.save();

  // Update user status
  await User.updateOne(
    { _id: req.userId },
    {
      $push: {
        post: data._id,
      },
    }
  );
  // console.log(updateStatus);

  res.status(200).redirect("/home");
}

module.exports = uploadStatus;
