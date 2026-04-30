import {Usuarios} from '../models/usuarios.js';

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