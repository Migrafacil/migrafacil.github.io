const { validationResult } = require("express-validator");
const usuario = require("./usuarioModel");
const bcrypt = require("bcryptjs");

verificarUsuAutenticado = (req, res, next) => {
    if (req.session.autenticado) {
        var autenticado = req.session.autenticado;
    } else {
        var autenticado = { autenticado: null, id: null, tipo: null };
    }
    req.session.autenticado = autenticado;
    next();
}

const limparSessao = (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/login'); // Redirecionar para a página de login
    });
};


gravarUsuAutenticado = async (req, res, next) => {
    const erros = validationResult(req);
    var autenticado =  { autenticado: null, id: null, tipo: null };
    if (erros.isEmpty()) {
        var dadosForm = {
            user_usuario: req.body.email,
            senha_usuario: req.body.password,
        };
        var results = await usuario.findUserEmail(dadosForm);
        console.log(results)
        var total = Object.keys(results).length;
        if (total == 1) {
            if (bcrypt.compareSync(dadosForm.senha_usuario, results[0].senha_usuario)) {
                var autenticado = {
                    autenticado: results[0].nome_usuario,
                    id: results[0].id_usuario,
                    // tipo: results[0].tipo_usuario
                };
            }
        } 
    } 
    req.session.autenticado = autenticado;
    req.session.logado = 0;
    next();
};

verificarUsuAutorizado = (tipoPermitido, destinoFalha) => {
    return (req, res, next) => {
        if (req.session.autenticado.autenticado != null &&
            tipoPermitido.find(function (element) { 
                return element == req.session.autenticado.tipo
             }) != undefined
        ) {
            next();
        } else {
            res.render(destinoFalha, req.session.autenticado);
        }
    };
};

module.exports = {
    verificarUsuAutenticado,
    limparSessao,
    gravarUsuAutenticado,
    verificarUsuAutorizado
};
