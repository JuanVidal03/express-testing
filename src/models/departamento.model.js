const { Schema, model } =  require("mongoose");

const departamentoSchema = new Schema({

    nombre: {
        type: String
    }

}, {
    timestamps: true
})

const DepartamentoModel = model("departamento", departamentoSchema);

module.exports = { DepartamentoModel };
