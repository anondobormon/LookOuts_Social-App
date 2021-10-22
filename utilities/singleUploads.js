const multer = require("multer");
const path = require("path");

// File upload folder
const uploader = (folder_path, file_type, file_size, error_msg) => {
  const UPLOAD_FOLDER = `./public/uploads/${folder_path}`;

  // Storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      req.upload_path = UPLOAD_FOLDER;
      cb(null, UPLOAD_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        Math.round(Math.random() * 1000000000) +
        Date.now();
      cb(null, fileName + fileExt);
    },
  });

  // Prepare the final multer method object
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: file_size, // 10MB
    },

    fileFilter: (req, file, cb) => {
      if (file_type.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error(error_msg));
      }
    },
  });
  return upload;
};
module.exports = uploader;
