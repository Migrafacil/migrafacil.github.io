var express = require("express");
var router = express.Router();
const pginicialController = require("../controllers/pginicialController");

router.get("/", function (req, res) {
  res.render("pages/pginicial", {pagina:"home", logado:null});
});

router.get("/login", function (req, res) {
  res.render("pages/login", {pagina:"login", logado:null});
});

router.get("/logado", function (req, res) {
  res.render("pages/logado", {pagina:"logado", logado:"logado"});
});

router.get("/logado", function (req, res) {
  res.render("pages/logado", {pagina:"logado", logado:"logado"});
});


router.get("/filtro", function (req, res) {
  res.render("pages/filtro", {pagina:"filtro", logado:null});
});

router.get("/empregos", function (req, res) {
  res.render("pages/empregos", {pagina:"empregos", logado: null });
});

router.get("/criar", function (req, res) {
  res.render("pages/criar", {pagina:"cadastro", logado:"null"});
});

router.get("/anuncio", function (req, res) {
  res.render("pages/anuncio",{pagina:"anuncio casas", logado: "null"});
});













module.exports = router