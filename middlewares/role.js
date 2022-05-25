const {handleHttpError} = require("../utils/handleError");

/*Este middleware verifica el rol 
 del usuario al acceder a las rutas*/

/**
 * Array con los roles permitidos
 * @param {*} role
 * @returns
 */
const checkRole = (role) => (req, res, next) => {
  try{
    // Obtenemos user del request body y no de la DB, 
    // ya que fue modificado por el authMiddleware
    const {user} = req;
    // Obtenemos el rol del usuario
    const rolesByUser = user.role;
    console.log({user});
    // checkValueRole devuelve un booleano 
    // luego de verificar si "role" esta dentro de "rolesByUser"
    const checkValueRole = role.some((roleSingle) => rolesByUser.includes(roleSingle));
    if(!checkValueRole){
      handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
      return;
    }
    next();
  }catch(e){
    handleHttpError(res, "ERROR_PERMISSIONS", 403);
  };
};

module.exports = checkRole;
