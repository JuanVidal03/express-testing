const { Router } = require("express"); 
const { getConteo } = require("../controllers/conteo.controller.js");

const conteoRouter = Router();

conteoRouter.get("/conteo", getConteo);

module.exports = conteoRouter;
