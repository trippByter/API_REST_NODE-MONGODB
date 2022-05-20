const express = require("express");
const router = express.Router();
// Estas son las valdiaciones
const authMiddleware = require("../middlewares/session");
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks");
const customHeader = require("../middlewares/customHeader");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controller/tracks");

// Generamos la ruta de tracks
// http://localhost/tracks con métodos GET, POST, DELETE, PUT (CRUD)

// Esta ruta nos lista los items
router.get("/", authMiddleware, getItems);

// Obtener detalle de item
// También aplicamos validación
router.get("/:id", validatorGetItem, getItem);

// Crear registro, con validación
router.post("/", validatorCreateItem, createItem);

// Actualizar un registro. Se hace validando el item y creandolo
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

// Eliminamos un registro
router.delete("/:id", validatorGetItem, deleteItem);


module.exports = router;