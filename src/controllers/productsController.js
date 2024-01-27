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
      include: [{association: "productsCart"}]
    })
    const myProductsCart = user.productsCart;

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
      const {code, name, stock, description, elaborationDate, expirationDate, price, category_id, discount_id, brand_id} = req.body;
      await db.Productos.create({
        img: req.file.filename,
        name: name,
        code: code ? code : "N/C",
        stock: stock,
        description: description,
        elaborationDate: elaborationDate,
        expirationDate: expirationDate,
        price: parseFloat(price),
        category_id: category_id,
        discount_id: discount_id,
        brand_id: brand_id
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
      const {code, name, stock, description, elaborationDate, expirationDate, price, category_id, discount_id, brand_id} = req.body;
      const product = await db.Productos.findByPk(req.params.id)
      const img = req.file ? req.file.filename : product.img
      await db.Productos.update({
        img: img,
        name: name,
        code: code ? code : "N/C",
        stock: stock,
        description: description,
        elaborationDate: elaborationDate,
        expirationDate: expirationDate,
        price: parseFloat(price),
        category_id: category_id,
        discount_id: discount_id,
        brand_id: brand_id
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
