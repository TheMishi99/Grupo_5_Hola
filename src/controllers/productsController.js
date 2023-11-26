const path = require("path");
const list = require("./listController");
const { index, findOne, save } = require("../models/product-model");

const productsController = {
  cart: (req, res) => {
    res.render("./products/productCart", { list: list });
  },
  detail: (req, res) => {
    const id = req.params.id
    const productoBuscado = findOne(id)
    res.render("./products/productDetail", {productoBuscado: productoBuscado});
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
  modify: (req, res) => {
    const products = index();

    const id = req.params.id;
    const { title, brand, info, price, description } = req.body;
    
    const productIndex = products.findIndex(product => product.id == id);

    products[productIndex].title = title;
    products[productIndex].brand = brand;
    products[productIndex].info = info;
    products[productIndex].price = parseFloat(price);
    products[productIndex].description = description;

    save(products);

    res.redirect("/products/" + id);
  },
  modifyView: (req, res) => {
    const id = req.params.id;
    const product = findOne(id);
    res.render("./products/modifyProduct", { product });
  },
  showAll: (req, res) => {
    const lista = index();
    res.render("./products/allProducts", { list: lista });
  },
};

module.exports = productsController;
