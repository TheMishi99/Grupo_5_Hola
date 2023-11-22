const path = require("path");
const list = require("./listController");

const productsController = {
  cart: (req, res) => {
    res.render("./products/productCart", { list: list });
  },
  detail: (req, res) => {
    res.render("./products/productDetail");
  },
  create: (req, res) => {
    const { titulo, marca, img, sabor, peso, precio, descripcion } = req.body;

    const nuevoProducto = {
      id: Math.floor(Math.random() * 100),
      img: img,
      titulo: titulo,
      marca: marca,
      sabor: sabor,
      peso: peso,
      precio: precio,
      off: null,
      descripcion: descripcion,
    };
    list.push(nuevoProducto);
    res.redirect("/products");
  },
  createView: (req, res) => {
    res.render("./products/createProduct");
  },
  modifyView: (req, res) => {
    res.render("./products/modifyProduct", { list: list });
  },
  showAll: (req, res) => {
    res.render("./products/allProducts", { list: list });
  },
};

module.exports = productsController;
