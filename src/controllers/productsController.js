const path = require("path");

const productsController = {
  cart: (req, res) => {
    res.render("./products/productCart");
  },
  detail: (req, res) => {
    res.render("./products/productDetail");
  },
};

module.exports = productsController;
