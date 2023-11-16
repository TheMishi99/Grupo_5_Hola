const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;

/* IMPORTACIONES DE RUTAS */
const mainRoutes = require("./routes/main");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");

app.use(express.static(path.join(__dirname, "../public")));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

/* IMPLEMENTACIÓN DE LAS RUTAS */
app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
