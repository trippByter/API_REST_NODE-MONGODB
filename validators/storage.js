/**
 * Creamos un middleware por cada C R U D
 * del "S T O R A G E"
 */

//==========Middleware de CreateItem=========//
const {check} = require("express-validator");
const validateResults =require("../utils/handleValidator");

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
    validatorGetItem
};