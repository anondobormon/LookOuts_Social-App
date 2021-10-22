const mongoose = require("mongoose");

const statusSchema = mongoose.Schema({
  image: {
    type: String,
  },
  status_text: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "People",
  },
});

const Status = mongoose.model("Status", statusSchema);
module.exports = Status;
