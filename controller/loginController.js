const User = require("../models/people");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function getLogin(req, res, next) {
  res.render("sign-up");
}

async function loginController(req, res, next) {
  try {
    const user = await User.find({ userEmail: req.body.userEmail });
    if (user.length > 0) {
      //Checked password is match or not
      const isValid = await bcrypt.compare(req.body.password, user[0].password);
      if (isValid) {
        const token = jwt.sign(
          {
            userId: user[0]._id,
            email: user[0].userEmail,
          },
          process.env.JWT_SECRET,
          { expiresIn: process.env.EXPIRE_SECRET }
        );
        //set cookies
        res.cookie(process.env.COOKIE_NAME, token, {
          httpOnly: true,
          sameSite: "strict",
        });
        //set data in locals
        res.locals.loggedInUser = {
          userId: user[0]._id,
          email: user[0].userEmail,
        };
        // console.log(res.locals);
        res.redirect("/home");
      }
    } else {
      res.status(400).json({ error: "Authentication failed!22" });
    }
  } catch (error) {
    res.status(400).json({ error: "Authentication failed!11" });
  }
}

module.exports = { loginController, getLogin };
