const { readFileSync } = require("fs");
const { join } = require("path");

/* IMPLEMENTANDO BASE DE DATOS */
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");
/* ************************* */

const productsController = {
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
  cart: async (req, res) => {
    try {
      const id = req.session.isLogged.id;
      const user = await db.Usuarios.findByPk(id, {
        include: [{ association: "productsCart" }],
      });
      const cartProductsPromises = user.productsCart.map(async (e) => {
        const producto = await db.Productos.findByPk(e.id, {
          include: ["discount", "brand", "categories"],
        });
        return producto;
      });

      const cartProducts = await Promise.all(cartProductsPromises);

      res.render("./products/productCart", {
        cart: user.productsCart,
        list: cartProducts,
        userLogged: req.session.isLogged,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error en el servidor");
    }
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
        quantity: req.body.quantity,
        product_id: producto.id,
        paymentMethod: "Credit Card",
        total: producto.price,
        yesDelivery: false,
      });

      res.redirect("/products/" + producto.id);
    } catch (error) {
      res.status(500).send("Error al intentar agregar el carrito");
    }
  },
  deleteItemCart: async (req, res) => {
    try {
      await db.CarritoProductos.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/products/cart");
    } catch (error) {
      res.status(500).send("Error al intentar eliminar el item del carrito");
    }
  },
  increaseQuantity: async (req, res) => {
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

      // Obtener el producto del carrito
      const carritoProducto = await db.CarritoProductos.findOne({
        where: { user_id: usuario.id, product_id: idProducto },
      });

      if (!carritoProducto) {
        return res.status(404).send("El producto no está en el carrito");
      }

      // Incrementar la cantidad en 1
      carritoProducto.quantity += 1;
      await carritoProducto.save();

      res.redirect("/products/cart");
    } catch (error) {
      res.status(500).send("Error al intentar incrementar la cantidad");
    }
  },
  decreaseQuantity: async (req, res) => {
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

      const carritoProducto = await db.CarritoProductos.findOne({
        where: { user_id: usuario.id, product_id: idProducto },
      });

      if (!carritoProducto) {
        return res.status(404).send("El producto no está en el carrito");
      }

      // Decrementar la cantidad en 1, mínimo 1
      carritoProducto.quantity = Math.max(carritoProducto.quantity - 1, 1);
      await carritoProducto.save();

      res.redirect("/products/cart");
    } catch (error) {
      res.status(500).send("Error al intentar decrementar la cantidad");
    }
  },
};

module.exports = productsController;
