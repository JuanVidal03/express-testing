const mongoose =  require("mongoose");

const conteoSchema = await mongoose.Schema({

    numeroDepartamentos: [{
        type: mongoose.Schema.Types.ObjectId
    }]

})

const ConteoModel = await mongoose.model("conteo", conteoSchema);

module.exports = { ConteoModel };
