const { readFileSync } = require("fs");
const { join } = require("path");
const list = require("../data/productsDataBase");
const { index, findOne, save } = require("../models/product-model");

const productsController = {
  cart: (req, res) => {
    res.render("./products/productCart", { list: list, userLogged: req.session.isLogged });
  },
  detail: (req, res) => {
    const id = req.params.id;
    const productoBuscado = findOne(id);
    res.render("./products/productDetail", {
      productoBuscado: productoBuscado,
      userLogged: req.session.isLogged
    });
  },
  create: (req, res) => {
    const { title, code, brand, img, info, weight, price, description } =
      req.body;
    const nuevoProducto = {
      id: Math.floor(Math.random() * 100),
      code: code ? code : "N/C",
      img: req.file.filename,
      title: title,
      brand: brand,
      info: info,
      weight: parseFloat(weight),
      price: parseFloat(price),
      off: null,
      description: description,
    };
    const productosActuales = JSON.parse(
      readFileSync(join(__dirname, "../data", "productsDataBase.json"), "utf-8")
    );
    productosActuales.push(nuevoProducto);
    save(productosActuales);
    res.redirect("/products");
  },
  createView: (req, res) => {
    res.render("./products/createProduct", { userLogged: req.session.isLogged });
  },
  modify: (req, res) => {
    const products = index();

    const id = req.params.id;
    const { title, brand, info, price, description } = req.body;

    const productIndex = products.findIndex((product) => product.id == id);

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
    res.render("./products/modifyProduct", { product, userLogged: req.session.isLogged });
  },
  destroy: (req, res) => {
    const id = req.params.id;
    const products = index();
    const productsUpdates = products.filter((product) => product.id != id);
    save(productsUpdates);
    res.redirect("/products");
  },
  showAll: (req, res) => {
    const lista = index();
    res.render("./products/allProducts", { list: lista, userLogged: req.session.isLogged });
  },
};

module.exports = productsController;
