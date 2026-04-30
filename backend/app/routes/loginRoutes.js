import express from "express";
// comando para importar funcion del controlador de login
import {loginController} from "../controllers/loginController.js";
// comando para importar funcion para generar rutas de express
const router = express.Router();

// comando para generar rutas de login
router.post('/auth', loginController);

//comando para exportar rutas de login
export default router;
