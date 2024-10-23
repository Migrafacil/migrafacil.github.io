var express = require("express");
var router = express.Router();
var {validarCPF, validarCNPJ, validarEmail} = require("../helpers/validação");
const usuarioController = require("../controllers/userController");
const {vagasController }= require("../controllers/vagasController");
const {imoveisController }= require("../controllers/imoveisController");


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
  res.render("pages/pginicial", {pagina:"home", logado: req.session.logado, autenticado: req.session.autenticado});
});

router.get(
  "/perfil",
  verificarUsuAutorizado([1, 2, 3, 4], "pages/login"),
  async function (req, res) {
    usuarioController.mostrarPerfil(req, res);
  }
);

router.post(
  "/perfil",
  usuarioController.regrasValidacaoPerfil,
  verificarUsuAutorizado([1, 2, 3,4], "pages/login"),
  async function (req, res) {
    usuarioController.gravarPerfil(req, res);
  }
);

router.get("/sair", limparSessao, function (req, res) {
  res.redirect("/");
});

router.get("/login", function (req, res) {
  res.render("pages/login", {pagina:"login", logado:null,
dadosNotificacao: null, listaErros: null});
});

router.post(
  "/login",
  usuarioController.regrasValidacaoFormLogin,
  gravarUsuAutenticado,
  function (req, res) {
    usuarioController.logar(req,res);
  }
)

router.post(
  "/alterarperfil",
 usuarioController.regrasValidacaoPerfil,
 verificarUsuAutorizado([1, 2, 3, 4], "pages/perfil"),
 async function (req, res) {
   usuarioController.gravarPerfil(req, res);
}
);

router.get("/logado", verificarUsuAutenticado, function (req, res) {
  console.log(`logado ${req.session.logado}`)
  res.render("pages/logado", {pagina:"logado", logado:"logado", autenticado: req.session.autenticado, login: req.session.logado});
});

router.get("/casas", function (req, res) {
  res.render("pages/casas", {pagina:"casas", logado:"casas"});
});

router.get("/filtro", function (req, res) {
  res.render("pages/filtro", {pagina:"filtro", logado:null});
});

router.get("/sobre", function (req, res) {
  res.render("pages/sobrenos", {pagina:"sobrenos", logado:null});
});

router.get("/emprego", verificarUsuAutenticado, function (req, res) {
 vagasController.listar(req, res);
//  usuarioController.mostrarPerfil(req, res);
});

router.get("/casas", verificarUsuAutenticado, function (req, res) {
  imoveisController.listar(req, res);
});

router.get("/detalhesemprego", function (req, res) {
  res.render("pages/detalhesemprego", {pagina:"detahesemprego", logado: null });
});

router.get("/recuperarsenha", (req, res) => {
  res.render("pages/recuperarsenha");
});

router.get("/resetarsenha", (req, res) => {
  res.render("pages/resetarsenha");
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
  usuarioController.regrasValidacaoFormCadempresa,
  function (req, res) {
    console.log(req.body);
    usuarioController.cadastrarEmpresa(req,res);
  }
)

router.get("/gravarvagas", function (req, res) {
  res.render("pages/perfil", {pagina:"", logado:"null",
  listaErros: null,
  valores: {
    //de acordo com o nome do formulario
    nome_usu: "",
    email_usu: "",
    cpf_cnpj_usu: "",
    senha_usu: "",
  }
})
});

router.post(
  "/publicarImovel",
  imoveisController.regrasValidacaoFormCadImovel,
  function (req, res) {
    console.log(req.body);
    imoveisController.gravarimoveis(req,res);
  }
)

router.post(
  "/publicarvaga",
  vagasController.regrasValidacaoFormCadempresa,
  function (req, res) {
    console.log(req.body);
    vagasController.gravarvagas(req,res);
  }
)


// router.get("/recuperar-senha", verificarUsuAutenticado, function(req, res){
//   res.render("pages/rec-senha",{ listaErros: null, dadosNotificacao: null });
// });

// router.post("/recuperar-senha",
//   verificarUsuAutenticado,
//   usuarioController.regrasValidacaoFormRecSenha, 
//   function(req, res){
//     usuarioController.recuperarSenha(req, res);
// });

// router.get("/resetar-senha", 
//   function(req, res){
//     usuarioController.validarTokenNovaSenha(req, res);
//   });
  
// router.post("/reset-senha", 
//     usuarioController.regrasValidacaoFormNovaSenha,
//   function(req, res){
//     usuarioController.resetarSenha(req, res);
// });

// var express = require("express");


// router.get(
//   "/perfil",
//   verificarUsuAutorizado([1, 2, 3], "pages/restrito"),
//   async function (req, res) {
//     usuarioController.mostrarPerfil(req, res);
//   }
// );


// router.get("/", verificarUsuAutenticado, function (req, res) {
//   res.render("pages/pginicial", {
//     autenticado: req.session.autenticado,
//     login: req.session.logado,
//   });
// });

// router.get("/sair", limparSessao, function (req, res) {
//   res.redirect("/");
// });

// router.get("/login", function (req, res) {
//   res.render("pages/login", { listaErros: null, dadosNotificacao: null });
// });

// router.post(
//   "/login",
//   usuarioController.regrasValidacaoFormLogin,
//   gravarUsuAutenticado,
//   function (req, res) {
//     usuarioController.logar(req, res);
//   }
// );

// router.get(
//   "/adm",
//   verificarUsuAutenticado,
//   verificarUsuAutorizado([2, 3], "pages/restrito"),
//   function (req, res) {
//     res.render("pages/adm", req.session.autenticado);
//   }
// );


module.exports = router;