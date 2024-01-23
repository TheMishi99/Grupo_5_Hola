const { readFileSync } = require("fs");
const { join } = require("path");

/*const list = require("../data/productsDataBase");
const { index, findOne, save } = require("../models/product-model");*/

/* IMPLEMENTANDO BASE DE DATOS */
const db = require("../database/models")
const sequelize = db.sequelize;
const { Op } = require("sequelize");
/* ************************* */

const productsController = {
  cart: async (req, res) => {
    const id = req.session.isLogged.id;
    const user = await db.Usuarios.findByPk(id, {
      include: [{association: "carritoProductos"}]
    })
    const myProductsCart = user.carritoProductos;

    res.render("./products/productCart", { list: myProductsCart, userLogged: req.session.isLogged });
  },
  list: async (req,res) =>{
    const list = await db.Productos.findAll()
    res.render('./products/allProducts', { list , userLogged: req.session.isLogged})
  },
  createView: (req, res) => {
    res.render("./products/createProduct", { userLogged: req.session.isLogged });
  },
  create: async (req,res)=>{
    try { 
      const { img, title, code, brand, info, weight, price, description } = req.body;
      await db.Productos.create({
        img: req.file.filename,
        title: title,
        code: code ? code : "N/C",
        brand: brand,
        info: info,
        weight: parseFloat(weight),
        price: parseFloat(price),
        off: null,
        description: description,
      })
      res.redirect('/products')
    }catch(error){
      res.send(error);
    } 
  },
  //
  detail: (req, res) => {
    const id = req.params.id;
    const productoBuscado = findOne(id);
    res.render("./products/productDetail", {
      productoBuscado: productoBuscado,
      userLogged: req.session.isLogged
    });
  },
  /*create: (req, res) => {
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
  },*/
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
  /*showAll: (req, res) => {
    const lista = index();
    res.render("./products/allProducts", { list: lista, userLogged: req.session.isLogged });
  },*/
};

module.exports = productsController;
