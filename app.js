const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;

app.use(express.static(path.join(__dirname, "./public")));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});
