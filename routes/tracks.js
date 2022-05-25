const express = require("express");
const router = express.Router();
// Estas son las valdiaciones
const authMiddleware = require("../middlewares/session");
const checkRole = require("../middlewares/role");
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks");
const customHeader = require("../middlewares/customHeader");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controller/tracks");

// Generamos la ruta de tracks
// http://localhost/tracks con métodos GET, POST, DELETE, PUT (CRUD)

// Esta ruta nos lista los items
router.get("/", authMiddleware, getItems);

// Obtener detalle de item
// También aplicamos validación
router.get("/:id", authMiddleware, validatorGetItem, getItem);

// Crear registro, con validación
// Este metodo solo es usado por "admin"
router.post("/",
  authMiddleware,
  // checkRole funciona después de authMiddleware.
  // El argumento (rol) debe ser "admin"
  checkRole(["admin"]),
  validatorCreateItem,
  createItem);

// Actualizar un registro. Se hace validando el item y creandolo
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);

// Eliminamos un registro
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);


module.exports = router;
