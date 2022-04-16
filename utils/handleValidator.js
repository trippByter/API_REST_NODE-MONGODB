const {validationResult} = require("express-validator");

const validateResults = (req, res, next) => {
    try {
        // Si existe un error, si no cumple con la validación: crashea.
        // pasa al catch
        validationResult(req).throw(); 
        return next(); // Continúa hacia el controlador
    } catch(err) {
        res.status(403);
        // Se envía un mensaje con un array de los errores
        res.send({errors: err.array()});
    }
};

module.exports = validateResults;