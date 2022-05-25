//========IMPORTAMOS LIBRERIAS========//
const {matchedData} = require("express-validator");
const {encrypt, compare} = require("../utils/handlePassword");
const {tokenSign} = require("../utils/handleJWT");
const {userModel} = require("../models");
const {handleHttpError} = require("../utils/handleError");
//=====FIN IMPORTAMOS LIBRERIAS=======//


//=====================CREAMOS REGISTRO=================//
const registerCtrl = async(req, res) => {
    try{
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

    } catch(e) {
        handleHttpError(res, "ERROR_REGISTER_USER");
    };
};
//=================FIN CREAMOS REGISTRO==================//


//=================LOGIN=================//
/**
 * Controlador encargado del login
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req,res) => {
    try{
        req = matchedData(req);
        // Buscamos en la base de datos al usuario
        const user = await userModel.findOne({email: req.email})
        .select("password name role email");
        // Si no existe, devuelve error
        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS", 404);
            return
        }

        // Traemos el hash password de la base de datos
        const hashPassword = user.get("password");
        // Comparamos contraseña del req con la de la base de datos
        const check = await compare(req.password, hashPassword);
        // Si no coincide, devuelve error
        if(!check){
            handleHttpError(res, "PASSWORD_INVALID", 401);
            return
        }

        user.set("password", undefined, {strict: false});
        const data = {
            token: await tokenSign(user),
            user
        }

        res.send({data});

    } catch(e){
        console.log(e)
        handleHttpError(res, "ERROR_LOGIN_USER");
    };
};
//==========FIN LOGIN=========//

module.exports = {
    loginCtrl, 
    registerCtrl
};
