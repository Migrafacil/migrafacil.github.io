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

router.get("/cadastrar", function (req, res){
  res.render("pages/cadastro", {
    pagina: "cadastro",
    logado:null,
    listaErros: null,
    valores: {
      nome_usu: "",
      email_usu: "",
      cpf_cnpj_usu: "",
      senha_usu: "",
    }
  })
}
)
router.get("/detalhes", verificarUsuAutenticado, function (req, res) {
  res.render("pages/detalhes", {pagina:"detalhes", logado:null});
});

router.get("/", verificarUsuAutenticado, function (req, res) {
  res.render("pages/pginicial", {pagina:"home", logado:null});
});

router.get(
  "/perfil",
  verificarUsuAutorizado([1, 2, 3], "pages/perfil"),
  async function (req, res) {
    usuarioController.mostrarPerfil(req, res);
  }
);

router.post(
  "/perfil",
  //uploadFile("imagem-perfil_usu"),
  usuarioController.regrasValidacaoPerfil,
  verificarUsuAutorizado([1, 2, 3], "pages/perfil"),
  async function (req, res) {
    usuarioController.gravarPerfil(req, res);
  }
);

router.get("/sair", limparSessao, function (req, res) {
  res.redirect("/");
});

router.get("/login", function (req, res) {
  res.render("pages/login", {pagina:"login", logado:null});
});

router.post(
  "/login",
  usuarioController.regrasValidacaoFormLogin,
  gravarUsuAutenticado,
  function (req, res) {
    usuarioController.logar(req,res);
  }
)

router.get(
  "/perfil",
  verificarUsuAutorizado([1, 2, 3], "pages/restrito"),
  async function (req, res) {
    usuarioController.mostrarPerfil(req, res);
  }
);

//router.post(
  //"/perfil",
  //uploadFile("imagem-perfil_usu"),
 // usuarioController.regrasValidacaoPerfil,
 // verificarUsuAutorizado([1, 2, 3], "pages/restrito"),
 // async function (req, res) {
 //   usuarioController.gravarPerfil(req, res);
// }
//);

router.get("/logado", function (req, res) {
  res.render("pages/logado", {pagina:"logado", logado:"logado"});
});

router.get("/casas", function (req, res) {
  res.render("pages/casas", {pagina:"casas", logado:"casas"});
});

router.get("/filtro", function (req, res) {
  res.render("pages/filtro", {pagina:"filtro", logado:null});
});

router.get("/emprego", function (req, res) {
  res.render("pages/emprego", {pagina:"emprego", logado: null });
});

router.get("/anuncios", function (req, res) {
  res.render("pages/anuncios", {pagina:"anuncios", logado:"anuncios"});
});

router.get("/detalhes", function (req, res) {
  res.render("pages/detalhes", {pagina:"detalhes", logado:"detalhes"});
});

router.get("/favoritos", function (req, res) {
  res.render("pages/favoritos", {pagina:"favoritos", logado:"favoritos"});
});

router.get("/filtrocasas", function (req, res) {
  res.render("pages/filtrocasas", {pagina:"filtrocasas", logado:"filtrocasas"});
});

router.get("/filtrovagas", function (req, res) {
  res.render("pages/filtrovagas", {pagina:"filtrovagas", logado:"filtrovagas"});
});

router.get("/cadastro", function (req, res) {
  res.render("pages/cadastro", {pagina:"cadastro", logado:"null",
  listaErros: null,
  valores: {
    nome_usu: "",
    email_usu: "",
    cpf_cnpj_usu: "",
    senha_usu: "",
  }
})
});
router.post(
  "/cadastro",
  usuarioController.regrasValidacaoFormCad,
  function (req, res) {
    console.log(req.body);
    usuarioController.cadastrar(req,res);
  }
)

router.get("/cnpj", function (req, res) {
  res.render("pages/cadastrocnpj", {pagina:"cadastrocnpj", logado:"null",
  listaErros: null,
  valores: {
    nome_usu: "",
    email_usu: "",
    cpf_cnpj_usu: "",
    senha_usu: "",
  }
})
});
router.post(
  "/cnpj",
  usuarioController.regrasValidacaoFormCad,
  function (req, res) {
    console.log(req.body);
    usuarioController.cadastrar(req,res);
  }
)

router.get("/casas", function (req, res) {
  res.render("pages/casas",{pagina:"anuncios casas", logado: "null"});
});


module.exports = router