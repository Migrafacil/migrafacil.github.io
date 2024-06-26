var express = require("express");
var router = express.Router();
var {validarCPF, validarCNPJ, validarEmail} = require("../helpers/validação");
const usuarioController = require("../controllers/userController");

const {
  verificarUsuAutenticado,
  limparSessao,
  gravarUsuAutenticado,
  verificarUsuAutorizado
} = require("../models/autenticador_middleware");

router.get("/", verificarUsuAutenticado, function (req, res) {
  res.render("pages/pginicial", {pagina:"home", logado:null});
});

router.get("/login", function (req, res) {
  res.render("pages/login", {pagina:"login", logado:null});
});

router.post(
  "/login",
  usuarioController.regrasValidacaoFormLogin,
  gravarUsuAutenticado,
  function (req, res) {limparSessao,
    usuarioController.logar(req,res);
  }
)

router.get("/logado", function (req, res) {
  res.render("pages/logado", {pagina:"logado", logado:"logado"});
});

router.get("/login", function (req, res) {
  res.render("pages/login", {pagina:"logado", logado:"logado"});
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

router.get("/cadastro", function (req, res) {
  res.render("pages/cadastro", {pagina:"cadastro", logado:"null"});
});
router.post(
  "/cadastro",
  usuarioController.regrasValidacaoFormCad,
  function (req, res) {limparSessao,
    usuarioController.cadastrar(req,res);
  }
)

router.get("/casas", function (req, res) {
  res.render("pages/casas",{pagina:"anuncios casas", logado: "null"});
});













module.exports = router