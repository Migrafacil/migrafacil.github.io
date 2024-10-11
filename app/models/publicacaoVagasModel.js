var pool = require("../../config/pool_conexoes");

    const publicacaoVagasModel = {
        findAll: async () => {
            try {
                const [resultados] = await pool.query(
                    'SELECT * FROM vaga'
                )
                return resultados;
            } catch (error) {
                return error;
            }
        },
        
        findId: async (id) => {
            try {
                const [resultados] = await pool.query(
                    //tabelas de vaga do banco
                    "select * from vaga where VagaID = ? ",
                    [id]
                )
                return resultados;
            } catch (error) {
                return error;
            }
        },
        create: async (camposJson) => {
            try {
                const [resultados] = await pool.query(
                    "insert into vaga set ?",
                    [camposJson]
                )
                return resultados;
            } catch (error) {
                return error;
            }
        },
        //alterar os metodos update e o delete para a responder a tabela vaga
        update: async (camposJson) => {
            try {
                const [resultados] = await pool.query(
                    "UPDATE vaga SET tipo_usuario = ?, descricao_usuario = ? WHERE id_tipo_usuario = ?",
                    [camposJson.vaga, camposJson.descricao_usuario, camposJson.id_tipo_usuario],
                )
                return resultados;
            } catch (error) {
                return error;
            }
        },
        delete: async (id) => {
            try {
                const [resultados] = await pool.query(
                    "UPDATE vaga SET status_tipo_usuario = 0 WHERE id_tipo_usuario = ?", [id]
                )
                return resultados;
            } catch (error) {
                return error;
            }
        }
    };

module.exports = {publicacaoVagasModel}
