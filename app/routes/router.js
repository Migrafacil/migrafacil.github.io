var express = require("express");
var router = express.Router();
var {validarCPF} = require("../helpers/validação");
const usuarioController = require("../controllers/userController");

const {
  verificarUsuAutenticado,
  limparSessao,
  gravarUsuAutenticado,
  verificarUsuAutorizado
} = require("../models/autenticador_middleware");

router.get("/", function (req, res) {
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

router.get("/anuncio", function (req, res) {
  res.render("pages/anuncio",{pagina:"anuncio casas", logado: "null"});
});













module.exports = router