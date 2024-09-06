const express = require("express");
const { config } = require("dotenv")
config();

const { dbConnection } = require("./DB/dbConfig.js");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const departamentoRouter = require("./routes/departamento.routes.js");
const conteoRouter  = require("./routes/conteo.routes.js");
app.use("/api", departamentoRouter);
app.use("/api", conteoRouter);

const server = app.listen(PORT, console.log(`Server running on port http://localhost:${PORT}`));
dbConnection();


module.exports = {
    app,
    server
};
