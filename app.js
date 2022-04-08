/*U S O    B Á S I C O - I N I C I A L    D E    E X P R E S S*/

// express nos ayuda a levantar un servicio web
const express = require("express");
// cors, evita error de origen cruzado entre navegadores
const cors = require("cors");
// dotenv, permite el uso correcto de variables de entorno
require("dotenv").config();
// esta constante nos permite usar el archivo '.env'
// el operador '||' indica que 'de lo contrario...'
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.listen(port, () => {
    console.log("App is running on port:", port);
});