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
      const {title, code, brand, info, weight, price, description } = req.body;
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
  detail: async  (req, res) => {
      const product = await db.Productos.findByPk(req.params.id)
      res.render('./products/productDetail', {product: product, userLogged: req.session.isLogged});
  },
  modifyView: async (req, res) => {
      const product = await db.Productos.findByPk(req.params.id)
      res.render("./products/modifyProduct", {product: product, userLogged: req.session.isLogged});
  },
  modify: async (req, res) => {
    try{
      const id = req.params.id
      const {title, code, brand, info, weight, price, off, description } = req.body;
      const product = await db.Productos.findByPk(req.params.id)
      const img = req.file ? req.file.filename : product.img
      await db.Productos.update({
        img: img,
        title: title,
        code: code ? code : "N/C",
        brand: brand,
        info: info,
        weight: parseFloat(weight),
        price: parseFloat(price),
        off: off,
        description: description,
      },
       {
          where: {id: id}
       }
      );
      res.redirect("/products/" + id);
    }catch(error){
      res.send(error)
    }
  },
  delete: async (req,res) => {
      const product = await db.Productos.findByPk(req.params.id)
      res.render("./products/deleteProduct", {product: product, userLogged: req.session.isLogged});
  },
  destroy: async (req, res) => {
    const id = req.params.id
    await db.Productos.destroy({
      where: {id: req.params.id}
    })
    res.redirect("/products");
  }
};

module.exports = productsController;
