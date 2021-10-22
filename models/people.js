const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    about: {
      type: String,
    },
    birth: {
      type: String,
    },
    livesIn: {
      type: String,
    },
    occupation: {
      type: String,
    },
    joined: {
      type: String,
    },
    phone: {
      type: String,
    },
    religion: {
      type: String,
    },
    politicalStatus: {
      type: String,
    },
    hobbies: {
      type: String,
    },
    music: {
      type: String,
    },
    shows: {
      type: String,
    },
    books: {
      type: String,
    },
    movies: {
      type: String,
    },
    writers: {
      type: String,
    },
    status: {
      type: mongoose.Types.ObjectId,
      ref: "Status",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timeStamps: "true",
  }
);

const People = mongoose.model("People", peopleSchema);
module.exports = People;
