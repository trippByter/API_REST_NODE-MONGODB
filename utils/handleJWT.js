/*MANEJADOR DE JSON WEB TOKEN */

//========>Importamos librerias, módulos<=======#
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
//=====>FIN Importamos librerias, módulos<======#

/**
 * Firmar. Recibe objeto del usuario.
 * Lo que guardamos en la base de datos.
 * ESTA FUNCIÓN RETORNA EL TOKEN JWT
 * @param {*} user
 */
const tokenSign = async (user) => {
    // Firmamos el token
    const sign = jwt.sign(
        // Propiedad 'payload'
        {
            _id: user._id,
            // Debemos verificar a nivel de backend
            // que la persona que dice ser, tiene 
            // los roles que tiene
            role: user.role
        },
        // Propiedad 'secret'
        JWT_SECRET,
        // Propiedades opcionales
        {
            // Tiempo de expiración
            expiresIn: "2h",
        }
    );
    
    return sign
}


/**
 * Verificar que el token que recibimos
 * esté firmado por nosotros.
 * tokenJWT - es el token de sesión JWT
 * @param {*} tokenJWT 
 * @returns 
 */
const verifyToken = async (tokenJWT) => {
    try{
        return jwt.verify(tokenJWT, JWT_SECRET) 
    }catch(e){
        return null
    }
}

module.exports = {tokenSign, verifyToken}
