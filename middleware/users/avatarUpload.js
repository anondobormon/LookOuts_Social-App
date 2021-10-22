const uploader = require("../../utilities/singleUploads");

const avatarUpload = (req, res, next) => {
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/png", "image/jpg"],
    10000000,
    "Only jpeg, jeg and png formate are allowed"
  );
  upload.single("avatar")(req, res, (err) => {
    next();
  });
};
module.exports = avatarUpload;
