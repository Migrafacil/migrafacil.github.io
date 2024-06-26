const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

var session = require("express-session");
app.use(
  session({
    secret: "HELLo nODE",
    resave: false,
    saveUninitialized: false,
}));

const env = require("dotenv").config();

app.use(express.static("./app/public"));

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var rotas = require("./app/routes/router");
app.use("/", rotas);

app.listen(port, () => {
  console.log(`Servidor online\nhttp://localhost:${port}`);
});
