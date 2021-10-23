//External imports
const User = require("../models/people");

// internal imports

const profileModify = async (req, res, next) => {
  try {
    const data = {
      about: req.body.about,
      birth: req.body?.birth,
      livesIn: req.body.livesIn,
      occupation: req.body.occupation,
      joined: req.body.joined,
      phone: req.body.phone,
      religion: req.body.religion,
      politicalStatus: req.body.politicalStatus,
      hobbies: req.body.hobbies,
      music: req.body.music,
      shows: req.body.shows,
      books: req.body.books,
      movies: req.body.movies,
      writers: req.body.writers,
    };
    const update = await User.updateMany(
      { _id: req.userId },
      {
        $set: data,
      }
    );
    if (update.acknowledged) {
      res.status("200").redirect("/profile");
    } else {
      res.status(500).render("error");
    }
  } catch (err) {
    res.status(500).render("error", { error: err });
  }
};

module.exports = profileModify;
