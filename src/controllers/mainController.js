const path = require("path");
const { index } = require("../models/product-model");

const mainController = {
  index: (req, res) => {
    const list = index();
    const offProducts = [];
    const latestProducts = index().reverse();
    const latest4Products = latestProducts.slice(0, 4);
    list.forEach((product) => {
      if (product.off !== null) {
        offProducts.push(product);
      }
    });
    const off4Products = offProducts.slice(0, 4);

    res.render("index", {
      latestProducts: latest4Products,
      off: off4Products,
    });
  },
};

module.exports = mainController;
