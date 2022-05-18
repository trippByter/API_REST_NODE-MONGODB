/*Creamos rutas de autenticación*/

const express = require("express");
const router = express.Router();
const {loginCtrl, registerCtrl} = require("../controller/auth");
const {validatorLogin, validatorRegister} = require("../validators/auth");


//=============RUTAS====================//
// localhost:3001/api/auth/login
// localhost:3001/api/auth/register
router.post("/register", validatorRegister, registerCtrl);

router.post("/login", validatorLogin, loginCtrl);
//=============FIN RUTAS================//
module.exports = router;