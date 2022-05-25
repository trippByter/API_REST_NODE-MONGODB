//==========L I B S===========//
const {handleHttpError} = require("../utils/handleError");
const {verifyToken} = require("../utils/handleJWT");
const {usersModel} = require("../models");

//======F I N   L I B S======//


const authMiddleware = async (req, res, next) => {
    try{
        //---Capturar el token con custom middleware---//
        // Si no hay token
        if(!req.headers.authorization){
            handleHttpError(res, "NEED_JWT_AUTH", 401)
            return
        }
        // T O K E N  :  req.headers.authorization
        // Separarlo del "Bearer " con el split() y pop()
        const token = req.headers.authorization.split(" ").pop();
        // Obtenemos el "payload", el cual
        // contiene el ID de usuario
        const dataToken = await verifyToken(token);
        if(!dataToken._id){
            handleHttpError(res, "ERROR_ID_TOKEN", 401);
            return
        }

        // Obtener el usuario que está consumiendo el token
        const user = await usersModel.findById(dataToken._id);
        // Inyectamos una propiedad (user) en el Request Body
        req.user = user;
        next();

    }catch(e){
        // Manejado de errores
        handleHttpError(res, "NOT_SESSION", 401);
    }
}

module.exports = authMiddleware;
