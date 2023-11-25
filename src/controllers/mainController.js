const path = require("path");
const list = require("./listController");

const mainController = {
  index: (req, res) => {
    res.render("index", { list: list });
  },
};

module.exports = mainController;
