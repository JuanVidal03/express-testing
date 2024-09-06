const { Router } = require("express"); 
const { getAllDespartamentos, createDepartamento } = require("../controllers/departamento.controller.js");

const departamentoRouter = Router();

departamentoRouter.get("/departamentos", getAllDespartamentos);
departamentoRouter.post("/departamentos", createDepartamento);

module.exports =  departamentoRouter;
