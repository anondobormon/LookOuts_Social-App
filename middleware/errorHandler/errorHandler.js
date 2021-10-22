const errorHandler = (err, req, res, next) => {
  res.locals.error = err.message;
  if (res.locals.error) {
    res.render("error", {
      title: "Error Page",
    });
  } else {
    res.json(res.locals.error);
  }
};

//Not found errorHandler
const notFoundHandler = () => {
  next(404, "Your requested content are not found!");
};

module.exports = { errorHandler, notFoundHandler };
