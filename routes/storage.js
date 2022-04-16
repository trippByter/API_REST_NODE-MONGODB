const uploadMiddleware = require("../utils/handleStorage");
const {createItem} = require("../controller/storage");
const express = require("express");
const router = express.Router();

/**
 * 
 */


// El middleware va entre la ruta y el controlador
// uploadMiddleware.single() - para un archivo
// uploadMiddleware.multi() - para mas de un archivo
router.post("/", uploadMiddleware.single("myfile"), createItem);


module.exports = router;