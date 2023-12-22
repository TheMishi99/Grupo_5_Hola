const { readFileSync } = require("fs");
const { join } = require("path");
const list = require("../data/productsDataBase");
const { index, findOne, save } = require("../models/product-model");

const productsController = {
  cart: (req, res) => {
    res.render("./products/productCart", { list: list });
  },
  detail: (req, res) => {
    const id = req.params.id;
    const productoBuscado = findOne(id);
    res.render("./products/productDetail", {
      productoBuscado: productoBuscado,
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
    res.render("./products/createProduct");
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
    res.render("./products/modifyProduct", { product });
  },
  destroy: (req, res) => {
    const id = req.params.id;
    console.log("ID:", id);
    const products = index();
    console.log("Products:", products);
    const productsUpdates = products.filter((product) => product.id != id);
    console.log("Productos Updates:", productsUpdates);
    save(productsUpdates);
    res.redirect("/products");
  },
  showAll: (req, res) => {
    const lista = index();
    res.render("./products/allProducts", { list: lista });
  },
};

module.exports = productsController;
