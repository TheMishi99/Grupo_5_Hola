const { readFileSync } = require("fs");
const { join } = require("path");

/* IMPLEMENTANDO BASE DE DATOS */
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");
/* ************************* */

const productsController = {
  cart: async (req, res) => {
    const id = req.session.isLogged.id;
    const user = await db.Usuarios.findByPk(id, {
      include: [{ association: "productsCart" }],
    });
    const myProductsCart = user.productsCart;

    res.render("./products/productCart", {
      list: myProductsCart,
      userLogged: req.session.isLogged,
    });
  },
  list: async (req, res) => {
    const list = await db.Productos.findAll({
      include: ["discount", "brand"],
    });
    res.render("./products/allProducts", {
      list,
      userLogged: req.session.isLogged,
    });
  },
  createView: async (req, res) => {
    const brands = await db.Marcas.findAll();
    const discounts = await db.Descuentos.findAll();
    const categories = await db.Categorias.findAll();
    res.render("./products/createProduct", {
      categories,
      brands,
      discounts,
      userLogged: req.session.isLogged,
    });
  },
  create: async (req, res) => {
    try {
      const {
        code,
        name,
        stock,
        description,
        elaborationDate,
        expirationDate,
        price,
        category_id,
        discount_id,
        brand_id,
      } = req.body;
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
        brand_id: brand_id,
      });
      res.redirect("/products");
    } catch (error) {
      res.send(error);
    }
  },
  detail: async (req, res) => {
    const product = await db.Productos.findByPk(req.params.id, {
      include: ["discount", "brand"],
    });
    const brands = await db.Marcas.findAll();
    const discounts = await db.Descuentos.findAll();
    const categories = await db.Categorias.findAll();
    res.render("./products/productDetail", {
      product: product,
      brands: brands,
      discounts: discounts,
      categories: categories,
      userLogged: req.session.isLogged,
    });
  },
  modifyView: async (req, res) => {
    const product = await db.Productos.findByPk(req.params.id, {
      include: ["discount", "brand"],
    });
    const brands = await db.Marcas.findAll();
    const discounts = await db.Descuentos.findAll();
    const categories = await db.Categorias.findAll();
    res.render("./products/modifyProduct", {
      product: product,
      brands: brands,
      discounts: discounts,
      categories: categories,
      userLogged: req.session.isLogged,
    });
  },
  modify: async (req, res) => {
    try {
      const id = req.params.id;
      const {
        code,
        name,
        stock,
        description,
        elaborationDate,
        expirationDate,
        price,
        category_id,
        discount_id,
        brand_id,
      } = req.body;
      const product = await db.Productos.findByPk(req.params.id);
      const img = req.file ? req.file.filename : product.img;
      await db.Productos.update(
        {
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
          brand_id: brand_id,
        },
        {
          where: { id: id },
        }
      );
      res.redirect("/products/" + id);
    } catch (error) {
      res.send(error);
    }
  },
  delete: async (req, res) => {
    const product = await db.Productos.findByPk(req.params.id);
    res.render("./products/deleteProduct", {
      product: product,
      userLogged: req.session.isLogged,
    });
  },
  destroy: async (req, res) => {
    const id = req.params.id;
    await db.Productos.destroy({
      where: { id: req.params.id },
    });
    res.redirect("/products");
  },
  addToCart: async (req, res) => {
    try {
      const idProducto = req.params.id;
      const usuario = await db.Usuarios.findOne({
        where: {
          email: req.cookies.userEmail,
        },
      });

      if (!usuario) {
        return res.status(404).send("Usuario no encontrado");
      }

      let carrito = await db.CarritoProductos.findOne({
        where: { user_id: usuario.id },
        include: [{ model: db.Productos, as: "product" }],
      });
      const producto = await db.Productos.findByPk(idProducto);

      if (!producto) {
        return res.status(404).send("Producto no encontrado");
      }

      carrito = await db.CarritoProductos.create({
        user_id: usuario.id,
        product_id: producto.id,
        paymentMethod: "Credit Card",
        total: producto.price,
        yesDelivery: false,
      });

      res.redirect("/products/" + producto.id);
    } catch (error) {
      res.status(500).send("Error interno del servidor");
    }
  },
};

module.exports = productsController;
