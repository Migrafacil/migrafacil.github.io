const { render } = require("ejs");
var pool = require("../../config/pool_conexoes");

    const usuarioModel = {
        findAll: async () => {
            try {
                const [resultados] = await pool.query(
                    "SELECT * " +
                    "FROM empresa" 
                )
                return resultados;
            } catch (error) {
                console.log("Error ao encontrar os usuários!! " + error);
                return error;  
            }
        },

        findUserEmail: async (camposForm) => {
            try {
                const [resultados] = await pool.query(
                    "SELECT * FROM empresa WHERE EMAIL_EMPRESA = ?",
                    [camposForm.user_usuario ]
                )
                return resultados;
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        findCampoCustom: async (criterioWhere) => {
            try {
                const [resultados] = await pool.query(
                    "SELECT count(*) totalReg FROM empresa WHERE ?",
                    [criterioWhere]
                )
                return resultados[0].totalReg;
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        
        create: async (dadosForm) => {
            try {
                console.log("Dados a serem inseridos:", dadosForm);
                const [resultados] = await pool.query("insert into empresa set ?", [dadosForm]);
                return resultados;
            } catch (error) {
                console.log("Dados a serem inseridos:", dadosForm);
                console.log(error);
                throw error; // Propaga o erro para ser capturado no bloco try/catch do controlador
            }
        },

        update: async (camposForm) => {
            try {
                const [resultados] = await pool.query(
                    "UPDATE usuario SET RAZAOSOCIAL = ?, CEP_EMPRESA = ?, CNPJ_EMPRESA = ?,  " +
                    " EMAIL_EMPRESA = ?, SENHA_EMPRESA = ?, NUMERO_EMPRESA = ?, COMPLEMENTO_EMPRESA = ? " +
                    " WHERE id_usuario = ?",
                    [camposForm.RAZAOSOCIAL, camposForm.SENHA_EMPRESA,
                    camposForm.EMAIL_USUARIO, camposForm.fone_usuario, camposForm.tipo_usuario,
                    camposForm.status_usuario, camposForm.id_usuario]//NOMES IGUAIS DO BANCO DE DADOS 
                )
                return resultados;
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        delete: async (id) => {
            try {
                const [resultados] = await pool.query(
                    "UPDATE usuario SET status_usuario = 0 WHERE id_usuario = ? ", [id]
                )
                return resultados;
            } catch (error) {
                console.log(error);
                return error;
            }
        },
    };

    module.exports = usuarioModel