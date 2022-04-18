/*El controlador es la parte que 
contiene la lógica de la aplicación
es donde finaliza el usuario, donde
nos conectamos a la base de datos.
Haremos un controlador por ruta.
*/
const fs = require("fs");
const {matchedData} = require("express-validator");
const {storageModel} = require("../models");
const {handleHttpError} = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;
// Ruta absoluta de archivos media
const MEDIA_PATH = `${__dirname}/../storage`;


//====Obtener lista de la base de datos====//
/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
    // Aquí traemos todo la lista completa
    const data = await storageModel.find({});
    res.send({data});
    } catch(e) {
        handleHttpError(res, "ERROR_GET_ITEMS");
    };
};
//_______Obtener lista de base de datos____//


//=============Obtener detalle==============//
/**
 * Obtener detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async(req, res) => {
    // Obtenemos parms que provienen de las rutas
    try{
        // Obtenemos el id
        const {id} = matchedData(req);
        // Obtenemos por 'id'
        const data = await storageModel.findById(id);
        res.send({data});
    } catch(e) {
        handleHttpError(res, "ERROR_GET_ITEM");
    };
};
//_____________Obtener detalle______________//


//==========Insertar un registro===========//
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async(req, res) => {
    try{
        const {body, file} = req;
    
        console.log(file);
        // Esto lo extraemos de la info del archivo
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        };
        const data = await storageModel.create(fileData);
        res.send({data});
    } catch(e) {
        handleHttpError(res, "ERROR_CREATE_ITEM");
    };
};
//__________Insertar un registro____________//


//==========Eliminar registro============//
/**
 * Eliminar registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async(req, res) => {
    // En este paso necesitamos el 'filename'
    // para realizar la solicitud a mongoDB
    // Obtenemos parms que provienen de las rutas
    try{
        // Obtenemos el id
        const {id} = matchedData(req);
        // Obtenemos por 'id'
        const dataFile = await storageModel.findById(id);
        // await storageModel.deleteOne(id);
        await storageModel.delete({_id: id});
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;
        // Usamos 'filesystem' para eliminar
        // Pasamos ruta absoluta
        //fs.unlinkSync(filePath);
        // Este objeto sirve de test
        const data = {
            filePath,
            deleted: 1
        }
        res.send({data});
    } catch(e) {
        handleHttpError(res, "ERROR_DELETE_ITEM");
    };
};
//__________Eliminar registro_____________//


module.exports = {
    getItems,
    getItem, 
    createItem, 
    deleteItem
};


/**
 * Datos de prueba para "postman"
 * {
    "data": [
        {
            "artist": {
                "name": "Leifer",
                "nickname": "leifermendez"
            },
            "duration": {
                "start": 1,
                "end": 0
            },
            "_id": "6255a14b7d32ecbde7d4a252",
            "name": "Leifer",
            "album": "Album",
            "cover": "http://ttt.com",
            "mediaId": "621e7499a1f699063f5114bc",
            "createdAt": "2022-04-12T15:56:59.077Z",
            "updatedAt": "2022-04-12T15:56:59.077Z"
        },
        {
            "artist": {
                "name": "Leifer",
                "nickname": "leifermendez"
            },
            "duration": {
                "start": 1,
                "end": 0
            },
            "_id": "625639fba3ab981e494f47fd",
            "name": "Leifer",
            "album": "Album",
            "cover": "http://ttt.com",
            "mediaId": "621e7499a1f699063f5114bc",
            "createdAt": "2022-04-13T02:48:27.371Z",
            "updatedAt": "2022-04-13T02:48:27.371Z"
        }
    ]
}
 */