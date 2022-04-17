/**
 * Creamos un middleware por cada C R U D
 * del "T R A C K"
 */

//==========Middleware de CreateItem=========//
const {check, validationResult} = require("express-validator");
const validateResults = require("../utils/handleValidator");

// Validación para el 'createItem'
const validatorCreateItem = [
    // Validar todos los campos del trackModel. 
    // Q exista, no esté vacío
    // tamaño string: ".isLength({min:5, max:90})".
    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artist").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickname").exists().notEmpty(),
    check("artist.nationality").exists().notEmpty(),
    check("duration").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("mediaID").exists().notEmpty().isMongoId(), // Si tiene el id de mongo
    // Esto es un middleware, y como tal , debe responder a 
    // la petición que se está realizando.
    // La petición es una señal que se generea desde el pc
    // hacia el server, y debe responder algo.
    (req, res, next) => {
        validateResults(req, res, next)
    }
];

// Validación para el 'getItem'
const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(), // Si tiene el id de mongo
    (req, res, next) => {
        validateResults(req, res, next)
    }
];
//__________Middleware de CreateItem__________//

module.exports = {
    validatorCreateItem,
    validatorGetItem
};