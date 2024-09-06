const { DepartamentoModel } = require("../models/departamento.model.js");

const getConteo = async(req, res) => {
    try {
        
        const numDepartamentos = await DepartamentoModel.find({});

        res.status(200).json({
            message: "Conteno obtenido correctamente!",
            data: numDepartamentos.length
        });

    } catch (error) {
        res.status(500).json({
            message: `Error al obtener el conteo, ${error.message}`,
            error
        });
    }
}


module.exports = { getConteo };
