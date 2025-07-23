const multer = require("multer");
const path = require("path");

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // const uploadPath = path.join(__dirname, "../../uploads");
    cb(null, "./uploads"); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    // Save with original name + timestamp
    const extension = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${extension}`;
    cb(null, uniqueName);
  },
});

const limit = {
  fileSize: 1024 * 1024 * 5, // 5MB
};

const filterFile = (req, file, cb) => {
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed (jpg, png, gif, webp)"), false);
  }
};

const upload = multer({ storage, limits: limit, fileFilter: filterFile });

module.exports = upload;
