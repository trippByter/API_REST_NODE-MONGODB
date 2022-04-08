const mongoose = require("mongoose");
// Declaramos el 'SCHEMA': Estructura, esquema
const StorageSchema = new mongoose.Schema(
    {
        url:{
            type: String
        },
        filename:{
            type: Number
        },
    },
    {   
        // Creamos los campos necesarios
        // para manejar las marcas de tiempo:
        // createAt, updateAt
        timestamps: true,
        versionKey: false,
    }
);

//             Nombre de la colección  | Estructura
module.exports = mongoose.model("storage", StorageSchema);