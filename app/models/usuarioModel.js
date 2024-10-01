const { render } = require("ejs");
var pool = require("../../config/pool_conexoes");

    const usuarioModel = {
        findAll: async () => {
            try {
                const [resultados] = await pool.query(
                    "SELECT u.id_usuario, u.nome_usuario, u.user_usuario, " +
                    "u.senha_usuario, u.email_usuario, u.fone_usuario, u.tipo_usuario, " +
                    "u.status_usuario, t.tipo_usuario, t.descricao_usuario " +
                    "FROM usuario u, tipo_usuario t where u.status_usuario = 1 and " +
                    "u.tipo_usuario = t.id_tipo_usuario"
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
                    "SELECT * FROM usuario WHERE EMAIL_USUARIO = ?",
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
                    "SELECT count(*) totalReg FROM usuario WHERE ?",
                    [criterioWhere]
                )
                return resultados[0].totalReg;
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        findId: async (id) => {
            try {
                const [resultados] = await pool.query(
                    "SELECT * " +
                    "FROM usuario u, tipo_usuario t where  " +
                    "u.tipo_usuario_idtipo_usuario = t.idtipo_usuario and u.id_usuario = ? ", [id]
                )
                return resultados;
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        
        create: async (dadosForm) => {
            try {
                console.log("Dados a serem inseridos:", dadosForm);
                const [resultados] = await pool.query("insert into usuario set ?", [dadosForm]);
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
                    "UPDATE usuario SET nome_usuario = ?, user_usuario = ?, senha_usuario = ?,  " +
                    " email_usuario = ?, fone_usuario = ?, tipo_usuario = ?, status_usuario = ? " +
                    " WHERE id_usuario = ?",
                    [camposForm.nome_usuario, camposForm.user_usuario, camposForm.senha_usuario,
                    camposForm.email_usuario, camposForm.fone_usuario, camposForm.tipo_usuario,
                    camposForm.status_usuario, camposForm.id_usuario]
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