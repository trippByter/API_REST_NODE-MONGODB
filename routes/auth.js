/*Creamos rutas de autenticación*/

const express = require("express");
const { matchedData } = require("express-validator");
const router = express.Router();
const {validatorLogin, validatorRegister} = require("../validators/auth");
const {userModel} = require("../models");
const {encrypt, compare} = require("../utils/handlePassword");

//=====================CREAMOS REGISTRO=================//
// localhost:3001/api/auth/login
// localhost:3001/api/auth/register
router.post("/register", validatorRegister, async(req, res) => {
    req = matchedData(req);
    // 'body' se asigna todo lo que contenga el req
    // y se sobreescribe el password
    const password = await encrypt(req.password)
    const body = {...req, password};
    // Envia el JSON de rspta con el passwd hasheado
    // res.send({data:body});
    const data = await userModel.create(body);
    // Data es modelo instanciado y lo seteamos
    // el 'password'con un valor undefined
    data.set("password", undefined, {strict: false});
    res.send({data});
});
//=================FIN CREAMOS REGISTRO==================//

module.exports = router;