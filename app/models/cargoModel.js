var pool = require("../../config/pool_conexoes");

    const cargoModel = {
        findAll: async () => {
            try {
                const [resultados] = await pool.query(
                    'SELECT * FROM cargo'
                )
                return resultados;
            } catch (error) {
                return error;
            }
        },
        create: async (camposJson) => {
            try {
                const [resultados] = await pool.query(
                    "insert into cargo set ?",
                    [camposJson]
                )
                return resultados;
            } catch (error) {
                return error;
            }
        },
    };

module.exports = {cargoModel}