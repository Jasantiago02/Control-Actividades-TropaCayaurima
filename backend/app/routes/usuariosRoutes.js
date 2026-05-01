import express from 'express';
// comando para importar funcion del controlador de usuarios
import {
    getUsuarios,
    createUsuario,
    getUsuarioById,
    updateUsuario,
    disableUsuario
} from "../controllers/usuariosController.js";
// comando para importar funcion para generar rutas de express
const router = express.Router();

// comando para generar rutas de usuarios
//listar todos los usuarios
router.get('/listarUsuarios', getUsuarios);
// Crear un nuevo usuario
router.post('/crear', createUsuario);
// Obtener un usuario específico por su ID
router.get('/buscar/:id', getUsuarioById);
// Actualizar datos de forma parcial (nombre, telefono, etc.)
router.patch('/actualizar/:id', updateUsuario);
// Inhabilitar usuario (Borrado lógico cambiando el estado)
router.put('/inhabilitar/:id', disableUsuario);

//comando para exportar rutas de usuarios
export default router;