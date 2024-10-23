const usuario = require("../models/usuarioModel");
const empresa = require("../models/empresaModel");
const {cargoModel} = require("../models/cargoModel");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(12);
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const https = require('https');
const { log } = require("console");
var {validarCNPJ, validarCPF, validarEmail} = require("../helpers/validação");

const usuarioController = {

    regrasValidacaoFormLogin: [
        body("email")
            .isEmail({ min: 3, max: 45 })
            .withMessage("Digite um e-mail válido!"),
        body("password")
            .isStrongPassword()
            .withMessage("A senha deve ter no mínimo 8 caracteres (mínimo 1 letra maiúscula, 1 caractere especial e 1 número)")
    ],

    regrasValidacaoFormCad: [
         body("nome")
            .isLength({ min: 3, max: 45 }).withMessage("Nome de usuário deve ter de 3 a 45 caracteres!"),
        body("email")
            .isEmail().withMessage("Digite um e-mail válido!")
            .custom(async value => {
                const email = await usuario.findCampoCustom({'EMAIL_USUARIO':value});
                if (email > 0) {
                  throw new Error('E-mail em uso!');
                }
              }), 
        body("senha")
            .isStrongPassword()
            .withMessage("A senha deve ter no mínimo 8 caracteres (mínimo 1 letra maiúscula, 1 caractere especial e 1 número)"),
        body("cpf")
        .custom(async value => {
            if (!validarCPF(value)) {
              throw new Error('CPF invalido');
            }
          }), 
    ],

    regrasValidacaoFormCadempresa: [
        body("nome")
           .isLength({ min: 3, max: 45 }).withMessage("Nome de usuário deve ter de 3 a 45 caracteres!"),
       body("email")
           .isEmail().withMessage("Digite um e-mail válido!")
           .custom(async value => {
               const email = await empresa.findCampoCustom({'EMAIL_USUARIO':value});
               if (email > 0) {
                 throw new Error('E-mail em uso!');
               }
             }), 
       body("senha")
           .isStrongPassword()
           .withMessage("A senha deve ter no mínimo 8 caracteres (mínimo 1 letra maiúscula, 1 caractere especial e 1 número)"),
       body("cnpj")
       .custom(async value => {
           if (!validarCNPJ(value)) {
             throw new Error('CNPJ invalido');
           }
         }), 
   ],

    regrasValidacaoPerfil: [
        body("nome")
            .isLength({ min: 3, max: 45 }).withMessage("Nome de usuário deve ter de 3 a 45 caracteres!"),
        body("email")
            .isEmail().withMessage("Digite um e-mail válido!"),
      
    ],

    logar: (req, res) => {
        const erros = validationResult(req);
        console.log(erros)
        if (!erros.isEmpty()) {
            return res.render("pages/login", { listaErros: erros, dadosNotificacao: null  })
        }

        if (req.session.autenticado.autenticado != null) {
            res.redirect("/logado");
        } else {
            res.render("pages/login", { listaErros: null,
                 dadosNotificacao: { titulo: "Falha ao logar!", mensagem: "Usuário e/ou senha inválidos!", tipo: "error" } })
        }
    },

    recuperarSenha: async (req, res) => {
        const erros = validationResult(req);
        console.log(erros);
        if (!erros.isEmpty()) {
          return res.render("pages/rec-senha", {
            listaErros: erros,
            dadosNotificacao: null,
            valores: req.body,
          });
        }
        try {
          //logica do token
          user = await usuario.findUserCustom({
            email_usuario: req.body.email_usu,
          });
          const token = jwt.sign(
            { userId: user[0].id_usuario, expiresIn: "40m" },
            process.env.SECRET_KEY
          );
          //enviar e-mail com link usando o token
          html = require("../util/email-reset-senha")(process.env.URL_BASE, token)
          enviarEmail(req.body.email_usu, "Pedido de recuperação de senha", null, html, ()=>{
            return res.render("pages/index", {
              listaErros: null,
              autenticado: req.session.autenticado,
              dadosNotificacao: {
                titulo: "Recuperação de senha",
                mensagem: "Enviamos um e-mail com instruções para resetar sua senha",
                tipo: "success",
              },
            });
          });
    
        } catch (e) {
          console.log(e);
        }
      },
    
      validarTokenNovaSenha: async (req, res) => {
        //receber token da URL
    
        const token = req.query.token;
        console.log(token);
        //validar token
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
          if (err) {
            res.render("pages/rec-senha", {
              listaErros: null,
              dadosNotificacao: { titulo: "Link expirado!", mensagem: "Insira seu e-mail para iniciar o reset de senha.", tipo: "error", },
              valores: req.body
            });
          } else {
            res.render("pages/resetar-senha", {
              listaErros: null,
              autenticado: req.session.autenticado,
              id_usuario: decoded.userId,
              dadosNotificacao: null
            });
          }
        });
      },
    
      resetarSenha: async (req, res) => {
        const erros = validationResult(req);
        console.log(erros);
        if (!erros.isEmpty()) {
          return res.render("pages/resetar-senha", {
            listaErros: erros,
            dadosNotificacao: null,
            valores: req.body,
          });
        }
        try {
          //gravar nova senha
          senha = bcrypt.hashSync(req.body.senha_usu);
          const resetar = await usuario.update({ senha_usuario: senha }, req.body.id_usuario);
          console.log(resetar);
          res.render("pages/login", {
            listaErros: null,
            dadosNotificacao: {
              titulo: "Perfil alterado",
              mensagem: "Nova senha registrada",
              tipo: "success",
            },
          });
        } catch (e) {
          console.log(e);
        }
      },


    cadastrar: async (req, res) => {
        console.log("Senha recebida:", req.body.senha);
        const erros = validationResult(req);
        const tipoUsuario = req.body.proprietario ? 4 : 1; // 1 para proprietário, 2 para comum
        
        var dadosForm = {
            CPF_CNPJ_USUARIO: req.body.cpf, 
            SENHA_USUARIO: bcrypt.hashSync(req.body.senha, salt),
            NOME_USUARIO: req.body.nome,
            EMAIL_USUARIO: req.body.email,
            tipo_usuario_idtipo_usuario: tipoUsuario,
        };
        console.log(dadosForm)

        if (!erros.isEmpty()) {
            console.log("Erros de validação:", erros.array());
            console.log(erros);
            return res.render("pages/cadastro", { listaErros: erros, dadosNotificacao: null, valores: req.body })
        }
        try {
            const createResult = await usuario.create(dadosForm); // Aguardando a criação do usuário
            console.log("Usuário criado:", createResult);
            var autenticado = {
                autenticado: dadosForm.NOME_USUARIO,
                id: createResult.insertId,
                tipo: dadosForm.tipo_usuario_idtipo_usuario,
            };
            req.session.autenticado = autenticado;

            if (createResult.affectedRows > 0) {
                res.redirect("/logado"); // Redireciona para a página logado após o cadastro bem-sucedido
            } else {
                throw new Error('Falha ao criar usuário');
            }
        } catch (e) {
            console.log(e);
            res.render("pages/cadastro", {
                listaErros: null, dadosNotificacao: {
                    titulo: "Erro ao cadastrar!", mensagem: "Verifique os valores digitados!", tipo: "error"
                }, valores: req.body
            })
        }
    },

    cadastrarEmpresa: async (req, res) => {
        console.log("Senha recebida:", req.body.senha);
        const erros = validationResult(req);
        const tipoUsuario = req.body.imobiliaria ? 3 : 2; 
  

        var dadosForm = {
            CPF_CNPJ_USUARIO: req.body.cnpj, 
            SENHA_USUARIO: bcrypt.hashSync(req.body.senha, salt),
            NOME_USUARIO: req.body.nome,
            EMAIL_USUARIO: req.body.email,
            tipo_usuario_idtipo_usuario: tipoUsuario,
        };
        console.log(dadosForm)

        if (!erros.isEmpty()) {
            console.log("Erros de validação:", erros.array());
            console.log(erros);
            return res.render("pages/cadastrocnpj", { listaErros: erros, dadosNotificacao: null, valores: req.body })
        }
        try {
            const createResult = await usuario.create(dadosForm); // Aguardando a criação do usuário
            console.log("Usuário criado:", createResult);
            var autenticado = {
                autenticado: dadosForm.NOME_USUARIO,
                id: createResult.insertId,
                tipo: dadosForm.tipo_usuario_idtipo_usuario,
            };
            req.session.autenticado = autenticado;

            if (createResult.affectedRows > 0) {
                res.redirect("/logado"); // Redireciona para a página logado após o cadastro bem-sucedido
            } else {
                throw new Error('Falha ao criar usuário');
            }
        } catch (e) {
            console.log(e);
            res.render("pages/cadastrocnpj", {
                listaErros: null, dadosNotificacao: {
                    titulo: "Erro ao cadastrar!", mensagem: "Verifique os valores digitados!", tipo: "error"
                }, valores: req.body
            })
        }
    },

    mostrarPerfil: async (req, res) => {
     
        try {
            let results = await usuario.findId(req.session.autenticado.id);
            if (results[0].cep_usuario != null) {
                const httpsAgent = new https.Agent({
                    rejectUnauthorized: false,
                });
                const response = await fetch(`https://viacep.com.br/ws/${results[0].cep_usuario}/json/`,
                    { method: 'GET', headers: null, body: null, agent: httpsAgent, });
                var viaCep = await response.json();
                var cep = results[0].cep_usuario.slice(0,5)+ "-"+results[0].cep_usuario.slice(5)
            }else{
                var viaCep = {logradouro:"", bairro:"", localidade:"", uf:""}
                var cep = null;
            }
            
            let campos = {
                NOME_USUARIO: results[0].NOME_USUARIO, EMAIL_USUARIO: results[0].EMAIL_USUARIO,
                SENHA_USUARIO: results[0].SENHA_USUARIO, CEP_USUARIO: results[0].CEP_USUARIO,
                COMPLEMENTO_USUARIO: results[0].COMPLEMENTO_USUARIO, NUMERO_USUARIO: results[0].NUMERO_USUARIO,
                CELULAR_USUARIO: results[0].CELULAR_USUARIO,
                nomeusu_usu: results[0].user_usuario, fone_usu: results[0].fone_usuario, senha_usu: ""
            }
            let listacargos = await cargoModel.findAll()
            res.render("pages/perfil", { listaErros: null, dadosNotificacao: null, listacargo: listacargos, valores: campos , autenticado: req.session.autenticado})
        } catch (e) {
         
            console.log(e);
            res.render("pages/perfil", {
                listaErros: null, autenticado: req.session.autenticado, listacargo: listacargos, dadosNotificacao: { titulo: "Erro ao carregar!", mensagem: "Tente novamente mais tarde!", tipo: "error"}, valores: {
                    NOME_USUARIO: "", EMAIL_USUARIO: "",
                    SENHA_USUARIO: "", 
                }
            })
        }
    },



   
    gravarPerfil: async (req, res) => {

        const erros = validationResult(req);
        const erroMulter = req.session.erroMulter;
        if (!erros.isEmpty() || erroMulter != null ) {
            lista =  !erros.isEmpty() ? erros : {formatter:null, errors:[]};
            if(erroMulter != null ){
                lista.errors.push(erroMulter);
            } 
            return res.render("pages/perfil", { listaErros: lista, autenticado: req.session.autenticado, dadosNotificacao: null, valores: req.body })
        }
        try {
            var dadosForm = {
                //banco
                NOME_USUARIO: req.body.nome,//formulario
                EMAIL_USUARIO: req.body.email,
                CEP_USUARIO: req.body.cep,
                CELULAR_USUARIO: req.body.telefone,
            };
            if (req.body.password != "") {
                dadosForm.SENHA_USUARIO = bcrypt.hashSync(req.body.password, salt);
            }
                  
            let resultUpdate = await usuario.update(dadosForm, req.session.autenticado.id);
            if (!resultUpdate.isEmpty()) {
                if (resultUpdate.changedRows == 1) {
                    var result = await usuario.findId(req.session.autenticado.id);
                    var autenticado = {
                        autenticado: result[0].NOME_USUARIO,
                        id: result[0].ID_USUARIO,
                        tipo: result[0].tipo_usuario_idtipo_usuario,
                    };
                    req.session.autenticado = autenticado;
                    var campos = {
                        NOME_USUARIO: result[0].NOME_USUARIO, EMAIL_USUARIO: result[0].EMAIL_USUARIO,
                        CEP_USUARIO: result[0].CEP_USUARIO,
                        CELULAR_USUARIO: result[0].CELULAR_USUARIO, SENHA_USUARIO: ""
                    }
                    res.render("pages/perfil", { listaErros: null, autenticado: req.session.autenticado, dadosNotificacao: { titulo: "Perfil! atualizado com sucesso", mensagem: "Alterações Gravadas", tipo: "success" }, valores: campos });
                }else{
                    res.render("pages/perfil", { listaErros: null, autenticado: req.session.autenticado, dadosNotificacao: { titulo: "Perfil! atualizado com sucesso", mensagem: "Sem alterações", tipo: "success" }, valores: dadosForm });
                }
            }
        } catch (e) {
            console.log(e)
            res.render("pages/perfil", { listaErros: erros, autenticado: req.session.autenticado, dadosNotificacao: { titulo: "Erro ao atualizar o perfil!", mensagem: "Verifique os valores digitados!", tipo: "error" }, valores: req.body })
        }
    } ,

    
    gravarimoveis: async (req, res) => {
        console.log("Senha recebida:", req.body.senha);
        const erros = validationResult(req);
        const tipoUsuario = req.body.proprietario ? 4 : 1; // 1 para proprietário, 2 para comum
        
        var dadosForm = {
            //inf do banco 
            CEP_Imovel: req.body.descricao-emprego, //formulario
            NUMERO_IMOVEL: req.body.CargaHorario,
            COMPLEMENTO_USUARIO: req.body.nome,
            IMAGEM1_IMOVEL: req.body.email,
            IMAGEM2_IMOVEL: req.body.email,
            IMAGEM3_IMOVEL: req.body.email,
            IMAGEM4_IMOVEL: req.body.email,
            usuario_ID_USUARIO: tipoUsuario,
        };
        console.log(dadosForm)

        if (!erros.isEmpty()) {
            console.log("Erros de validação:", erros.array());
            console.log(erros);
            return res.render("pages/cadastro", { listaErros: erros, dadosNotificacao: null, valores: req.body })
        }
        try {
            const createResult = await usuario.create(dadosForm); // Aguardando a criação do usuário
            console.log("Usuário criado:", createResult);
            var autenticado = {
                autenticado: dadosForm.NOME_USUARIO,
                id: createResult.insertId,
                tipo: dadosForm.tipo_usuario_idtipo_usuario,
            };
            req.session.autenticado = autenticado;

            if (createResult.affectedRows > 0) {
                res.redirect("/logado"); // Redireciona para a página logado após o cadastro bem-sucedido
            } else {
                throw new Error('Falha ao criar usuário');
            }
        } catch (e) {
            console.log(e);
            res.render("pages/cadastro", {
                listaErros: null, dadosNotificacao: {
                    titulo: "Erro ao cadastrar!", mensagem: "Verifique os valores digitados!", tipo: "error"
                }, valores: req.body
            })
        }
    },
}




module.exports = usuarioController