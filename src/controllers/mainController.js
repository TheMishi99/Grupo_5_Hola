const path = require("path");
const { index } = require("../models/product-model");

/* IMPLEMENTANDO BASE DE DATOS */
const db = require("../database/models")
/* ************************* */

const mainController = {
  index: async (req, res) => {
    //const list = index();
    const list = await db.Productos.findAll();
    const discounts = await db.Descuentos.findAll();
    const offProducts = [];
    const latestProducts = list.reverse();
    const latest4Products = latestProducts.slice(0, 4);
    list.forEach((product) => {
      if (product.off !== null) {
        offProducts.push(product);
      }
    });
    const off4Products = offProducts.slice(0, 4);

    res.render("index", {
      discounts:discounts,
      latestProducts: latest4Products,
      off: off4Products,
      userLogged: req.session.isLogged
    });
  },
  stores: async (req, res) => {
    res.render("stores",{userLogged: req.session.isLogged})
  },
  aboutMishis: async (req, res) => {
    res.render("aboutMishis",{userLogged: req.session.isLogged})
  },
  contactUs: async (req, res) => {
    res.render("contactUs",{userLogged: req.session.isLogged})
  },
  privacyPolicies: async (req, res) => {
    res.render("privacyPolicies",{userLogged: req.session.isLogged})
  },
  frequentQuestions: async (req, res) => {
    res.render("frequentQuestions",{userLogged: req.session.isLogged})
  },
  workWithUs: async (req, res) => {
    res.render("workWithUs",{userLogged: req.session.isLogged})
  },
  cambiosyDev: async (req, res) => {
    res.render("changes",{userLogged: req.session.isLogged})
  },
  methodDelivery:async (req, res) => {
    res.render("methodDelivery",{userLogged: req.session.isLogged})
  },
  terms:async (req, res) => {
    res.render("terms",{userLogged: req.session.isLogged})
  }
};

module.exports = mainController;
