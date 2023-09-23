const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log("No se pudo conectar a la BD")
        console.log(error);
    }
}

const desconectarDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("Desconectado de la base de datos");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { conectarDB, desconectarDB }