const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationFolder = path.join(__dirname, "../../public/img/users");
    cb(null, destinationFolder);
  },
  filename: (req, file, cb) => {
    const newFileName = createImageName(file);
    cb(null, newFileName);
  },
});

function createImageName(file) {
  return (
    "user-" +
    Date.now() +
    "-" +
    file.originalname.replace(path.extname(file.originalname), "") +
    path.extname(file.originalname)
  );
}

const upload = multer({
  storage,
});

module.exports = {
  upload,
};