//==========L I B S===========//
const {handleHttpError} = require("../utils/handleError");
const {verifyToken} = require("../utils/handleJWT");

//======F I N   L I B S======//


const authMiddleware = async (req, res, next) => {
    try{
        //---Capturar el token con custom middleware---//
        // Si no hay token
        if(!req.headers.authorization){
            handleHttpError(res, "NEED_SESSION", 401)
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

        next();

    }catch(e){
        // Manejado de errores
        handleHttpError(res, "NOT_SESSION", 401);
    }
}

module.exports = authMiddleware;