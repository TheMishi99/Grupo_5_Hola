const path = require("path");
const { index } = require("../models/product-model");

/* IMPLEMENTANDO BASE DE DATOS */
const db = require("../database/models")
/* ************************* */

const mainController = {
  index: async (req, res) => {
    const list = index();
    // const list = await db.Productos.findAll();
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
      userLogged: req.session.isLogged
    });
  },
};

module.exports = mainController;
