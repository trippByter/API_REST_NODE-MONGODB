/*El controlador es la parte que 
contiene la lógica de la aplicación
es donde finaliza el usuario, donde
nos conectamos a la base de datos.
Haremos un controlador por ruta.
*/
const {tracksModel} = require("../models");
const {matchedData} = require("express-validator");
const {handleHttpError} = require("../utils/handleError");


//====Obtener lista de la base de datos====//
/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    // Manejando errores con TRY / CATCH
    try {
        // Aquí traemos todo la lista completa
        const data = await tracksModel.find({});
        res.send({data});
    } catch(e) {
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
    
};
//_______Obtener lista de base de datos____//


//=============Obtener detalle==============//
/**
 * Obtener detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async(req, res) => {};
//_____________Obtener detalle______________//


//==========Insertar un registro===========//
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async(req, res) => {
    // Manejando errores con TRY / CATCH
    try {
        // Obtenemos un body limpio
        const body = matchedData(req);
        const data = await tracksModel.create(body);
        res.send({data});
    } catch(e) {
        handleHttpError(res, "ERROR_CREATE_ITEMS");
    }
};
//__________Insertar un registro____________//


//==========Actualizar registro===========//
/**
 * Actualizar registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async(req, res) => {};
//__________Actualizar registro____________//


//==========Eliminar registro============//
/**
 * Eliminar registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async(req, res) => {};
//__________Eliminar registro_____________//


module.exports = {
    getItems,
    getItem, 
    createItem, 
    updateItem, 
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