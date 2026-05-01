import {Usuarios} from '../models/usuarios.js';

// Listar todos
export const getUsuarios = async (req, res) => {
    try{
        const usuarios = new Usuarios();
        const result = await usuarios.listar_usuarios();
        return res.status(200).json(result);
    }catch (error) {
        console.error('Error al obtener los usuarios:', error);
        return res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
    
};

// Crear usuario
export const createUsuario = async (req, res) => {
    const { id, nombre, apellido, genero, telefono, cargo, usuario, password } = req.body;
    try {
        const nuevoUsuario = new Usuarios(id, nombre, apellido, genero, telefono, cargo, usuario, password);
        await nuevoUsuario.crear_usuario();
        res.status(201).json({ message: 'Usuario creado con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

// Buscar por ID
export const getUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
        const userInstance = new Usuarios(id);
        const user = await userInstance.obtener_usuario_por_id();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Actualizar datos
export const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    try {
        const userInstance = new Usuarios();
        const result = await userInstance.actualizar_usuario(id, datosActualizados);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Inhabilitar usuario (Borrado lógico)
export const disableUsuario = async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body; // Enviamos el nuevo estado (ej. 'inactivo')
    try {
        const userInstance = new Usuarios(id, null, null, null, null, null, null, null, estado);
        await userInstance.eliminar_usuario();
        res.status(200).json({ message: 'Usuario inhabilitado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al inhabilitar el usuario' });
    }
};