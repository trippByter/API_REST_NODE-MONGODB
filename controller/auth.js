//========IMPORTAMOS LIBRERIAS========//
const {matchedData} = require("express-validator");
const {encrypt} = require("../utils/handlePassword");
const {tokenSign} = require("../utils/handleJWT");
const {userModel} = require("../models");
//=====FIN IMPORTAMOS LIBRERIAS=======//


//=====================CREAMOS REGISTRO=================//
const loginCtrl = async(req, res) => {
    req = matchedData(req);
    // 'body' se asigna todo lo que contenga el req
    // y se sobreescribe el password
    const password = await encrypt(req.password);
    const body = {...req, password};
    // Envia el JSON de rspta con el passwd hasheado
    // res.send({data:body});
    const dataUser = await userModel.create(body);
    // Data es modelo instanciado y lo seteamos
    // el 'password'con un valor undefined
    // Esta línea es para que el password no aparezca
    // en las consultas
    dataUser.set("password", undefined, {strict: false});
    
    const data = { 
        token: await tokenSign(dataUser),
        user:dataUser,
    };

    res.send({data});
};
//=================FIN CREAMOS REGISTRO==================//

module.exports = {loginCtrl};