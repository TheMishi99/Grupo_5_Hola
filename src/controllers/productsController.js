const path = require("path");
const productCart=require("./cartController")

const productsController = {
  cart: (req, res) => {
    res.render("./products/productCart", {productCart : productCart});
  },
  detail: (req, res) => {
    res.render("./products/productDetail");
  },
};

module.exports = productsController;
