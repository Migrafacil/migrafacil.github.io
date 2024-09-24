const usuario = require("../models/usuarioModel");
const empresa = require("../models/empresaModel");
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

            let campos = {
                nome_usu: results[0].nome_usuario, email_usu: results[0].email_usuario,
                numero: results[0].numero_usuario,
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



   
    gravarPerfil: async (req, res) => {

        const erros = validationResult(req);
        const erroMulter = req.session.erroMulter;
        if (!erros.isEmpty() || erroMulter != null ) {
            lista =  !erros.isEmpty() ? erros : {formatter:null, errors:[]};
            if(erroMulter != null ){
                lista.errors.push(erroMulter);
            } 
            return res.render("pages/perfil", { listaErros: lista, dadosNotificacao: null, valores: req.body })
        }
        try {
            var dadosForm = {
                user_usuario: req.body.nomeusu_usu,
                nome_usuario: req.body.nome_usu,
                email_usuario: req.body.email_usu,
                img_perfil_banco: req.session.autenticado.img_perfil_banco,
                img_perfil_pasta: req.session.autenticado.img_perfil_pasta,
            };
            if (req.body.senha_usu != "") {
                dadosForm.senha_usuario = bcrypt.hashSync(req.body.senha_usu, salt);
            }
            if (!req.file) {
                console.log("Falha no carregamento");
            } else {
                //Armazenando o caminho do arquivo salvo na pasta do projeto 
                caminhoArquivo = "imagem/perfil/" + req.file.filename;
                //Se houve alteração de imagem de perfil apaga a imagem anterior
                if(dadosForm.img_perfil_pasta != caminhoArquivo ){
                    removeImg(dadosForm.img_perfil_pasta);
                }
                dadosForm.img_perfil_pasta = caminhoArquivo;
                dadosForm.img_perfil_banco = null;

                // //Armazenando o buffer de dados binários do arquivo 
                // dadosForm.img_perfil_banco = req.file.buffer;                
                // //Apagando a imagem armazenada na pasta
                // if(dadosForm.img_perfil_pasta != null ){
                //     removeImg(dadosForm.img_perfil_pasta);
                // }
                // dadosForm.img_perfil_pasta = null; 
            }
            let resultUpdate = await usuario.update(dadosForm, req.session.autenticado.id);
            if (!resultUpdate.isEmpty) {
                if (resultUpdate.changedRows == 1) {
                    var result = await usuario.findId(req.session.autenticado.id);
                    var autenticado = {
                        autenticado: result[0].nome_usuario,
                        id: result[0].id_usuario,
                        tipo: result[0].id_tipo_usuario,
                        img_perfil_banco: result[0].img_perfil_banco != null ? `data:image/jpeg;base64,${result[0].img_perfil_banco.toString('base64')}` : null,
                        img_perfil_pasta: result[0].img_perfil_pasta
                    };
                    req.session.autenticado = autenticado;
                    var campos = {
                        nome_usu: result[0].nome_usuario, email_usu: result[0].email_usuario,
                        img_perfil_pasta: result[0].img_perfil_pasta, img_perfil_banco: result[0].img_perfil_banco,
                        nomeusu_usu: result[0].user_usuario, fone_usu: result[0].fone_usuario, senha_usu: ""
                    }
                    res.render("pages/perfil", { listaErros: null, dadosNotificacao: { titulo: "Perfil! atualizado com sucesso", mensagem: "Alterações Gravadas", tipo: "success" }, valores: campos });
                }else{
                    res.render("pages/perfil", { listaErros: null, dadosNotificacao: { titulo: "Perfil! atualizado com sucesso", mensagem: "Sem alterações", tipo: "success" }, valores: dadosForm });
                }
            }
        } catch (e) {
            console.log(e)
            res.render("pages/perfil", { listaErros: erros, dadosNotificacao: { titulo: "Erro ao atualizar o perfil!", mensagem: "Verifique os valores digitados!", tipo: "error" }, valores: req.body })
        }
    }
}




module.exports = usuarioController