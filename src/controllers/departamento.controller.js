const { DepartamentoModel } = require("../models/departamento.model.js");

const getAllDespartamentos = async(req, res) => {
    try {
        
        const departamentos = await DepartamentoModel.find({});

        res.status(200).json({
            message: "Departamentos obtenidos correctamente!",
            data: departamentos
        });

    } catch (error) {
        res.status(500).json({
            message: `Error al obtener los departamentos, ${error.message}`,
            error
        });
    }
} 

const createDepartamento = async(req, res) => {

    const { nombre } = req.body;

    try {

        const departamentoCreated = await DepartamentoModel.create({nombre});
        
        res.status(201).json({
            message: "Departamento creado correctamente!",
            data: departamentoCreated
        });

        
    } catch (error) {
        res.status(500).json({
            message: `Error al crear departamento, ${error.message}`,
            error
        });
    }
}


module.exports = {
    getAllDespartamentos,
    createDepartamento
}
