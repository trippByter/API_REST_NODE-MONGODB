const mongoose = require("mongoose");
// Declaramos el 'SCHEMA': Estructura, esquema
const TracksSchema = new mongoose.Schema(
    {
        name:{
            type: String
        },
        album:{
            type: String
        },
        cover:{
            type: String,
            // Validación al ingresar este dato:
            // cuando la URL no se URL, devuelve "ERROR_URL"
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist:{
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nacionality: {
                type: String,
            },
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            },
        },
        mediaId: {
            // String que debe conformar cierto
            // patrón de como son en mongo
            type: mongoose.Types.ObjectId,
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
module.exports = mongoose.model("tracks", TracksSchema);