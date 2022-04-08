const express = require("express");
const fs = require("fs");
const router = express.Router();

// __dirname nos da la ruta absoluta
const PATH_ROUTES = __dirname;
const removeExtension = (filename) => {
    // Extraemos el nombre del archivo sin la extensión
    return filename.split('.').shift()
}
// Leer el 'directorio' de manera asíncrona.
// El directorio está en PATH_ROUTES.
// devuelve un 'array'
fs.readdirSync(PATH_ROUTES).filter((file) => {
    // Concatenamos ese nombre con una
    // familia de rutas
    const name = removeExtension(file);
    if(name !== "index"){
        console.log(`Cargando ruta ${name}`);
        // name: nombre de la familia de la ruta
        // file: llama a los controladores que están
        // segmentados por rutas
        router.use(`/${name}`, require(`./${file}`)); // localhost:3000/api/tracks

    }
});
module.exports = router;