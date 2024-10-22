const { publicacaoVagasModel } = require("../models/publicacaoVagasModel");
const { body, validationResult } = require("express-validator");
const {cargoModel} = require("../models/cargoModel");

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const https = require('https');



const vagasController = {

    regrasValidacaoFormCadempresa: [
        body("descricaoemprego")
           .isLength({ min: 20, max: 1000 }).withMessage("Escreva com no minimo 20 letras e maximo 1000."),
       body("CargaHorario")
           .isInt().withMessage("Digite um valor numerico!"),
       body("salarioemprego")
           .isFloat().withMessage("Digite um valor numerico!"),
       body("localemprego")
       .isLength({ min: 5, max: 50 }).withMessage("Escreva com no minimo 5 letras."),
   ],

    listar: async (req, res) => {
        results = await publicacaoVagasModel.findAll();
        res.render("pages/emprego", {pagina:"emprego", logado: null,
            autenticado: req.session.autenticado,
            login: req.session.logado,
            listavagas: results,
        
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

    gravarvagas: async (req, res) => {
        console.log("Senha recebida:", req.body.senha);
        const erros = validationResult(req);
    
        let listacargos = await cargoModel.findAll()
        let listavagas = await publicacaoVagasModel .findAll()
        var dadosForm = {
            //inf do banco 
            DescricaoVaga: req.body.descricaoemprego, //formulario
            CargaHoraria: req.body.CargaHorario,
            cargo_CargoID: req.body.cargoID,
            usuario_ID_USUARIO: req.session.autenticado.id,
            SALARIO: req.body.salarioemprego,
            LOCALIZACAO:  req.body.localemprego

        };
        
        console.log(dadosForm)

        if (!erros.isEmpty()) {
            console.log("Erros de validação:", erros.array());
            console.log(erros);
            return res.render("pages/perfil", { listaErros: erros, autenticado: req.session.autenticado, listacargo: listacargos, dadosNotificacao: null, valores: req.body })
        }
        try {
           
            const createResult = await publicacaoVagasModel.create(dadosForm); 
            console.log(createResult)
            res.redirect("/emprego")
            // return res.render("pages/emprego", { listaErros: null, listavagas: listavagas, autenticado: req.session.autenticado, dadosNotificacao: {
            //     titulo: "Sucesso ao publicar!", mensagem: "Vaga publicada!", tipo: "success"
            // }, valores: req.body })

        } catch (e) {
            console.log(e);
            res.render("pages/perfil", {
                listaErros: null, autenticado: req.session.autenticado, listacargo: listacargos, dadosNotificacao: {
                    titulo: "Erro ao cadastrar!",  mensagem: "Verifique os valores digitados!", tipo: "error"
                }, valores: req.body
            })
        }
    },


}


module.exports = { vagasController }



