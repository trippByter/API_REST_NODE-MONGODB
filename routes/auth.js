/*Creamos rutas de autenticación*/

const express = require("express");
const router = express.Router();
const {loginCtrl} = require("../controller/auth");
const {validatorLogin, validatorRegister} = require("../validators/auth");


// localhost:3001/api/auth/login
// localhost:3001/api/auth/register
router.post("/register", validatorRegister, loginCtrl);

module.exports = router;