const { publicacaoVagas } = require("../models/publicacaoImovelModel");
const { body, validationResult } = require("express-validator");


const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const https = require('https');



const imoveisController = {

    regrasValidacaoFormCadempresa: [
        body("descricaoimovel")
           .isLength({ min: 20, max: 255 }).withMessage("Escreva com no minimo 20 letras e maximo 255."),
       body("precoimovel")
           .isInt().withMessage("Digite um valor numerico!"),
       body("cepimovel")
           .isFloat().withMessage("Digite um valor numerico!"),
        body("numeroimovel")
           .isFloat().withMessage("Digite um valor numerico!"),
       body("localemprego")
       .isLength({ min: 5, max: 50 }).withMessage("Escreva com no minimo 5 letras."),
   ],

    listar: async (req, res) => {
        results = await publicacaoImovelModel.findAll();
        res.render("pages/casas", {pagina:"casas", logado: null,
            autenticado: req.session.autenticado,
            login: req.session.logado,
            listacasas: results,
            
        });
    },

    favoritar: async (req, res) => {
        if (req.session.autenticado.autenticado == null) {
            res.render("pages/login", { 
                listaErros: null,
                 dadosNotificacao: {
                     titulo: "Faça seu Login!", 
                     mensagem: "Para favoritar é necessário estar logado !", 
                     tipo: "warning" 
                    } 
                });
        } else {
            await favoritoModel.favoritar({
                idHq: req.query.id,
                situacao: req.query.sit,
                idUsuario: req.session.autenticado.id
            });
            res.redirect("/")
        }
    },

    gravarimoveis: async (req, res) => {
        console.log("Senha recebida:", req.body.senha);
        const erros = validationResult(req);
    
        
        var dadosForm = {
            //inf do banco 
            DescricaoVaga: req.body.descricaoimovel, //formulario
            CargaHorario: req.body.precoimovel,
            cargo_CargoID: req.body.tituloimovel,
            usuario_ID_USUARIO: req.session.autenticado.id,
            SALARIO: req.body.cepimovel,
            LOCALIZACAO:  req.body.numeroimovel

        };
        console.log(dadosForm)

        if (!erros.isEmpty()) {
            console.log("Erros de validação:", erros.array());
            console.log(erros);
            return res.render("pages/cadastro", { listaErros: erros, dadosNotificacao: null, valores: req.body })
        }
        try {
            const createResult = await publicacaoVagas.create(dadosForm); 

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


module.exports = { imoveisController }



