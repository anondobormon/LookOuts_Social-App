const uploader = require("../../utilities/singleUploads");

const statusImageUpload = (req, res, next) => {
  const upload = uploader(
    "statusImage",
    ["image/jpeg", "image/png", "image/jpg"],
    10000000,
    "Only jpeg, jeg and png formate are allowed"
  );
  upload.single("image")(req, res, (err) => {
    if (err) {
      next();
    } else next();
  });
};
module.exports = statusImageUpload;
