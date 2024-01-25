const { readFileSync } = require("fs");
const { join } = require("path");
const list = require("../data/productsDataBase");
const { index, findOne, save } = require("../models/product-model");

/* IMPLEMENTANDO BASE DE DATOS */
const db = require("../database/models")
/* ************************* */

const productsController = {
  cart: async (req, res) => {
    const id = req.session.isLogged.id;
    const user = await db.Usuarios.findByPk(id, {
      include: [{association: "productsCart"}]
    })
    const myProductsCart = user.productsCart;

    res.render("./products/productCart", { list: myProductsCart, userLogged: req.session.isLogged });
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
    const { code, img, name, stock, description, elaborationDate, expirationDate, price,idDiscount,idBrand} =
      req.body;
    const nuevoProducto = {
      id: Math.floor(Math.random() * 100),
      code: code ? code : "N/C",
      img: req.file.filename,
      name: name,
      stock: stock,
      description: description,
      elaborationDate: elaborationDate,
      expirationDate:expirationDate,
      price: parseFloat(price),
      idDiscount:idDiscount,
      idBrand:idBrand
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
