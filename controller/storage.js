/*El controlador es la parte que 
contiene la lógica de la aplicación
es donde finaliza el usuario, donde
nos conectamos a la base de datos.
Haremos un controlador por ruta.
*/
const {storageModel} = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;


//====Obtener lista de la base de datos====//
/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    // Aquí traemos todo la lista completa
    const data = await storageModel.find({});
    res.send({data});
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
    const {body, file} = req;
    
    console.log(file);
    // Esto lo extraemos de la info del archivo
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    };
    const data = await storageModel.create(fileData);
    res.send({data});
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