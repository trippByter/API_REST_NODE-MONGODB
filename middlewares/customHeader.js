/**
 * En los middlewares es importante 
 * recibir el "next"
 * "next" deja que todo siga
 */
const customHeader = (req, res, next) => {
    try {
        // apiKey viene en el header
        const apiKey = req.headers.api_key;
        if(apiKey === "Oscar-01"){
            next();
        } else {
            res.status(403);
            res.send({error: "API_KEY_NO_ES_CORRECTA"});
        }
    } catch(error) {
        // En caso de error, manda un 403
        // y un mensaje de error.
        res.status(403);
        res.send({error: "ALGO_OCURRIO_EN_EL_CUSTOM_HEADER"});
    }
}

module.exports = customHeader;