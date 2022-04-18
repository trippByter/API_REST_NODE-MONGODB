const uploadMiddleware = require("../utils/handleStorage");
const {createItem, getItems, getItem, deleteItem} = require("../controller/storage");
const {validatorGetItem} = require("../validators/storage");
const express = require("express");
const router = express.Router();

// Obtener lista de items
router.get("/", getItems);
// Detalle de item
router.get("/:id", validatorGetItem, getItem);
// Eliminar item
router.delete("/:id", validatorGetItem, deleteItem);

// El middleware va entre la ruta y el controlador
// uploadMiddleware.single() - para un archivo
// uploadMiddleware.multi() - para mas de un archivo
router.post("/", uploadMiddleware.single("myfile"), createItem);


module.exports = router;