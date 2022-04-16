const multer = require("multer");

//==========Config de multer===========//
// "storage" hace referencia al disco de almacenamiento
const storage = multer.diskStorage({
    // Lugar donde se guardará el archivo,
    // se guarda en la carpeta "storage"
    // respetar parámetros
    destination: function(req, file, callback){
        const pathStorage = `${__dirname}/../storage`;
        // Primer parámetro es error, si lo hubiera
        // Segundo parámetro es destino
        callback(null, pathStorage);
    },
    // Configuración de nombre para guardar el archivo
    // Se guardará en formato de hora de UNIX
    filename: function(req, file, callback){
        // Obtenemos extensiones de archivos
        const ext = file.originalname.split(".").pop();
        // Configuración de nombres de archivos
        const filename = `file-${Date.now()}.${ext}`;
        callback(null, filename);
    }
});
//__________Config de multer__________//



// El middleware va entre la ruta y el controlador
// uploadMiddleware.single() - para un archivo
// uploadMiddleware.multi() - para mas de un archivo
//=============Middelware=============//
const uploadMiddleware = multer({storage});
//_____________Middelwlare____________//

module.exports = uploadMiddleware;