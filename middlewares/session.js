//==========L I B S===========//
const {handleHttpError} = require("../utils/handleError");
const {verifyToken} = require("../utils/handleJWT");
const {usersModel} = require("../models");
const getProperties = require("../utils/handlePropEngine");
const propKeys = getProperties();
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
        
        // Nos aseguramos que este dataToken tenga un objeto,
        // que exista algo en esa variable
        if(!dataToken){
          handleHttpError(res, "NOT_PAYLOAD_DATA", 401);
          return
        }

        // Aqui tenemos: "id" o "_id"
        const query = {
          [propKeys.id]: dataToken[propKeys.id]
        }
        
        // Obtener el usuario que está consumiendo el token
        // "findOne" es común entre sql y mongo.
        // Dependiendo del motor de bd, buscará por "id" o "_id"
        const user = await usersModel.findOne(query);
        // Inyectamos una propiedad (user) en el Request Body
        req.user = user;
        next();

    }catch(e){
        // Manejado de errores
        handleHttpError(res, "NOT_SESSION", 401);
    }
}

module.exports = authMiddleware;
