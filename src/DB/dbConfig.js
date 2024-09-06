const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("<<< DB conectada >>>");

    } catch (error) {
        console.log(`<<< Error al conectar la DB, ${error.message} >>>`);
        console.log(error.message);
    }
}

module.exports = { dbConnection };