const path = require("path");
const list =require("./listController")

const productsController = {
  cart: (req, res) => {
    res.render("./products/productCart", {list : list});
  },
  detail: (req, res) => {
    res.render("./products/productDetail");
  },
};

module.exports = productsController;
