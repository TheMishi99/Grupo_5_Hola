const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = 5000;
var cookieParser = require("cookie-parser");
/* PARA APLICAR MODIFICACION DE METODOS */
const methodOverride = require("method-override");

/* SESSION */
const session = require("express-session");

/* IMPORTACIONES DE RUTAS */
const mainRoutes = require("./routes/main");
const productsAPIRoutes = require("./routes/api/productsAPI");
const usersAPIRoutes = require("./routes/api/usersAPI");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");

/* PARA PETICIONES */
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(session({ secret: "secreto_mishi" }));
app.use(express.static(path.join(__dirname, "../public")));

/* EJS Seteado */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`
  Servidor escuchando en el puerto ${PORT}
  *****************************************************
  * Ingresa al siguiente link(ctrl + click):          *
  *           http://localhost:${PORT}/                  *
  *****************************************************
  `);
});

/* IMPLEMENTACIÓN DE LAS RUTAS */
app.use("/api/products", productsAPIRoutes);
app.use("/api/users", usersAPIRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/", mainRoutes);

/* MANEJO DE ERROR POR URL */
app.use((req, res, next) => {
  res.status(404).render("./error/error", {
    userLogged: req.session.isLogged,
    status: 404,
    message: "¡Miau! Página no encontrada",
  });
});
