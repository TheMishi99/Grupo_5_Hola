const path = require("path");

const productsController = {
  cart: (req, res) => {
    res.sendFile(
      path.join(__dirname, "../views/products/", "productCart.html")
    );
  },
  detail: (req, res) => {
    res.sendFile(
      path.join(__dirname, "../views/products", "productDetail.html")
    );
  },
};

module.exports = productsController;
