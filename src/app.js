const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;
/* PARA APLICAR MODIFICACION DE METODOS */
const methodOverride = require("method-override");

/* IMPORTACIONES DE RUTAS */
const mainRoutes = require("./routes/main");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");

/* PARA PETICIONES */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "../public")));

/* EJS Seteado */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

/* IMPLEMENTACIÓN DE LAS RUTAS */
app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

/* MANEJO DE ERROR POR URL */
app.use((req, res, next) => {
  res.status(404).render("./error/error");
});
