import express from 'express';
// comando para importar funcion del controlador de usuarios
import {getUsuarios} from "../controllers/usuariosController.js";
// comando para importar funcion para generar rutas de express
const router = express.Router();
// comando para generar rutas de usuarios
router.post('/listarUsuarios', getUsuarios);
//comando para exportar rutas de usuarios
export default router;