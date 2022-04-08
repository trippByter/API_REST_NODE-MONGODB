/*C R E A M O S    C O N E X I Ó N    
C O N    B A S E    D E 
D A T O S    D E    M O N G O    A T L A S*/

const mongoose = require("mongoose");
// Función para conectarnos a la base de datos
const dbConnect = () => {
    // Traemos el URI declarado en el '.env'
    const DB_URI = process.env.DB_URI;
    // Crear conexión al DB_URI declarado,
    // con parámetros que se detallan.
    // Devuelve un callback
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        if(!err){
            console.log("***** CONEXION CORRECTA *****");
            console.log("**********");
            console.log(res);
            console.log("**********");
        } else {
            console.log("***** ERROR DE CONEXION *****");
            console.log("**********");
            console.log(err);
            console.log("**********");
        };
    });
};

// Permitimos exportación
module.exports = dbConnect;