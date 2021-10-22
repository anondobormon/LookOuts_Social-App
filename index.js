//External Imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

//Internal Imports
const userRouter = require("./router/userRouter");
const loginRouter = require("./router/loginRouter");
const {
  errorHandler,
  notFoundHandler,
} = require("./middleware/errorHandler/errorHandler");

const app = express();
dotenv.config();

//Server connection options
mongoose
  .connect(
    "mongodb+srv://learningMongodb:L7WjwKRuFQOkvnaU@cluster0.3hvbw.mongodb.net/Lookouts?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connection success to Lookouts"))
  .catch((err) => console.log(err));

// Request parser
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser
app.use(cookieParser(process.env.JWT_SECRET));

//Set view engine
app.set("view engine", "ejs");

//Routing setup
app.use("/", userRouter);
app.use("/login", loginRouter);

//Not found error handler
app.use(notFoundHandler);

// default error handle
app.use(errorHandler);

//server config
app.listen(5000, () => {
  console.log("App listing to port 5000");
});
