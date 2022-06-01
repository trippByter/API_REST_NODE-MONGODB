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

/**
 * Generamos relacion NoSQL - MongoDB
 * Relación usada para método GET
 * de /api/tracks
 * ".findAllData" es el nombre del método que
 * manejará el controlador. Será el mismo 
 * nombre en el modelo MySQL
 * */

TracksSchema.statics.findAllData = function(){
  // Dentro de "aggregate", se colocan los distintos
  // stages o etapas por la que está pasando la consulta
  const joinData = this.aggregate([
    {
      // lookup -> join de mysql
      $lookup: {
        from: "storages", // Tracks -> relación -> Storage
        localField: "mediaId", // mediaId de Tracks
        foreignField: "_id", // _id de Storage
        as: "audio", // alias
      },
    },
    {
      $unwind: "audio"
    }
  ]);
  return joinData;
};

// Obtener detalle de un "track"
// Relación usada para método GET de /api/tracks/'id'
TracksSchema.statics.findOneData = function (id){
  const joinData = this.aggregate([
    {
      $match :{
        _id: mongoose.Types.ObjectId(id),
      }
    },
    {
      $lookup:{
        from: "storages",
        localField: "mediaId",
        foreignField: "_id",
        as: "audio"
      }
    }
  ]);
  return joinData;
};





// Usando mongoose-delete
// Sobreescribimos los métodos ya vienen nativos de mongoose
// con el soft-delete
TracksSchema.plugin(mongooseDelete, {overrideMethods: "all"});

module.exports = mongoose.model("tracks", TracksSchema);
