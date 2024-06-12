const express = require("express");
const router = express.Router();
const pginicialController = require("../controllers/pginicialController");

router.get("/login", function (req, res) {
  res.render("pages/template-home", {pagina:"login", logado:null});
});
router.get("/cadastro", function (req, res) {
  res.render("pages/template-home", {pagina:"cadastro", logado:null});
});
router.get("/perfil", function (req, res) {
  res.render("pages/template-home", {pagina:"perfil", logado:"logado"});
});






module.exports = router