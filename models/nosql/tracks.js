const mongoose = require("mongoose");
// Importamos 'mongoose-delete'
const mongooseDelete = require("mongoose-delete");
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
            type: mongoose.Types.ObjectId,
        },

    },
    {   
        timestamps: true,
        versionKey: false,
    }
);

// Usando mongoose-delete
// Sobreescribimos los métodos ya vienen nativos de mongoose
// con el soft-delete
TracksSchema.plugin(mongooseDelete, {overrideMethods: "all"});

module.exports = mongoose.model("tracks", TracksSchema);