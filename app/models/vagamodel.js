var pool = require("../../config/pool_conexoes");

    const vagamodel = {
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
    };

module.exports = {vagamodel}