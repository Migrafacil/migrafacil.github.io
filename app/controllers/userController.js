const usuario = require("../models/usuarioModel");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(12);
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const https = require('https');
const { log } = require("console");

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
            .isLength({ min: 3, max: 45 }).withMessage("Nome deve ter de 3 a 45 caracteres!"),
        body("nome")
            .isLength({ min: 3, max: 45 }).withMessage("Nome de usuário deve ter de 3 a 45 caracteres!"),
        body("email")
            .isEmail().withMessage("Digite um e-mail válido!")
            .custom(async value => {
                const nomeUsu = await usuario.findCampoCustom({'email_usuario':value});
                if (nomeUsu > 0) {
                  throw new Error('E-mail em uso!');
                }
              }), 
        body("password")
            .isStrongPassword()
            .withMessage("A senha deve ter no mínimo 8 caracteres (mínimo 1 letra maiúscula, 1 caractere especial e 1 número)")
    ],


    regrasValidacaoPerfil: [
        body("nome")
            .isLength({ min: 3, max: 45 }).withMessage("Mínimo de 3 letras e máximo de 45!"),
        body("nome")
            .isLength({ min: 8, max: 45 }).withMessage("Nome de usuário deve ter de 8 a 45 caracteres!"),
        body("email")
            .isEmail().withMessage("Digite um e-mail válido!"),
      
    ],

    logar: (req, res) => {
        const erros = validationResult(req);
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


    cadastrar: async (req, res) => {
        const erros = validationResult(req);
        var dadosForm = {
            CPF_CNPJ_USUARIO: req.body.cpf, 
            SENHA_USUARIO: bcrypt.hashSync(req.body.senha, salt),
            NOME_USUARIO: req.body.nome,
            EMAIL_USUARIO: req.body.email,
        };
        console.log(dadosForm)

        if (!erros.isEmpty()) {
            console.log(erros);
            return res.render("pages/cadastro", { listaErros: erros, dadosNotificacao: null, valores: req.body })
        }
        try {
            const createResult = await usuario.create(dadosForm); // Aguardando a criação do usuário
            console.log("Usuário criado:", createResult);

            if (createResult.affectedRows > 0) {
                res.redirect("/logado"); // Redireciona para a página logado após o cadastro bem-sucedido
            } else {
                throw new Error('Falha ao criar usuário');
            }
        } catch (e) {
            console.log(e);
            res.render("pages/cadastro", {
                listaErros: erros, dadosNotificacao: {
                    titulo: "Erro ao cadastrar!", mensagem: "Verifique os valores digitados!", tipo: "error"
                }, valores: req.body
            })
        }
    }

}




module.exports = usuarioController