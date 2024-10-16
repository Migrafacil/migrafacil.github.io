var pool = require("../../config/pool_conexoes");

    const publicacaoImovelModel = {
        findAll: async () => {
            try {
                const [resultados] = await pool.query(
                    'SELECT * FROM imovel'
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
                    "select * from tipo_usuario where ImovelID",
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
                    "insert into imovel set ?",
                    [camposJson]
                )
                return resultados;
            } catch (error) {
                return error;
            }
        },
        update: async (camposJson) => {
            try {
                const [resultados] = await pool.query(
                    "UPDATE tipo_usuario SET tipo_usuario = ?, descricao_usuario = ? WHERE id_tipo_usuario = ?",
                    [camposJson.tipo_usuario, camposJson.descricao_usuario, camposJson.id_tipo_usuario],
                )
                return resultados;
            } catch (error) {
                return error;
            }
        },
        delete: async (id) => {
            try {
                const [resultados] = await pool.query(
                    "UPDATE tipo_usuario SET status_tipo_usuario = 0 WHERE id_tipo_usuario = ?", [id]
                )
                return resultados;
            } catch (error) {
                return error;
            }
        }
    }

module.exports ={ publicacaoImovelModel}
