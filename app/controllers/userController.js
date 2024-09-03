const usuario = require("../models/usuarioModel");
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
        body("senha")
            .isStrongPassword()
            .withMessage("A senha deve ter no mínimo 8 caracteres (mínimo 1 letra maiúscula, 1 caractere especial e 1 número)"),
        body("CNPJ")
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
        console.log("Senha recebida:", req.body.senha);
        const erros = validationResult(req);
        var dadosForm = {
            CPF_CNPJ_USUARIO: req.body.cpf, 
            SENHA_USUARIO: bcrypt.hashSync(req.body.senha, salt),
            NOME_USUARIO: req.body.nome,
            EMAIL_USUARIO: req.body.email,
            tipo_usuario_idtipo_usuario: 1,
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
                nome_usu: results[0].nome_usuario, email_usu: results[0].email_usuario,
                cep:  cep, 
                numero: results[0].numero_usuario,
                complemento: results[0].complemento_usuario, logradouro: viaCep.logradouro,
                bairro: viaCep.bairro, localidade: viaCep.localidade, uf: viaCep.uf,
                img_perfil_pasta: results[0].img_perfil_pasta,
                img_perfil_banco: results[0].img_perfil_banco != null ? `data:image/jpeg;base64,${results[0].img_perfil_banco.toString('base64')}` : null,
                nomeusu_usu: results[0].user_usuario, fone_usu: results[0].fone_usuario, senha_usu: ""
            }

            res.render("pages/perfil", { listaErros: null, dadosNotificacao: null, valores: campos })
        } catch (e) {
            console.log(e);
            res.render("pages/perfil", {
                listaErros: null, dadosNotificacao: null, valores: {
                    img_perfil_banco: "", img_perfil_pasta: "", nome_usu: "", email_usu: "",
                    nomeusu_usu: "", fone_usu: "", senha_usu: "", cep: "", numero: "", complemento: "",
                    logradouro: "", bairro: "", localidade: "", uf: ""
                }
            })
        }
    },

}


module.exports = usuarioController