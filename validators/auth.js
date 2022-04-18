/**
 * Validaciones del registro y login de usuarios
 */
const {check} = require("express-validator");
const validateResults = require("../utils/handleValidator");
//==========Middleware de Registro de usuario=========//
const validatorRegister = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:3, max:30}), // Longitud del string
    check("age")
    .exists()
    .notEmpty()
    .isNumeric(), // Que sea número
    check("email")
    .exists()
    .notEmpty()
    .isEmail(), // Que sea email
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:8, max:16}), // Tamaño del password
    (req, res, next) => {
        validateResults(req, res, next)
    }
];
//__________Middleware de Registro de usuario__________//


//==========Middleware del login=========//
const validatorLogin = [
    check("email")
    .exists()
    .notEmpty()
    .isEmail(), // Que sea email
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:8, max:16}), // Tamaño del password
    (req, res, next) => {
        validateResults(req, res, next)
    }
];
//__________Middleware del login__________//


module.exports = {
    validatorRegister,
    validatorLogin
};