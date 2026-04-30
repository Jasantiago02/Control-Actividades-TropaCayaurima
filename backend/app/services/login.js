import pool from '../models/db.js';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
dotenv.config();
const jwtSecret= process.env.JWT_SECRET;

export const login = async (usuario, password) => {
    try {
        const [rows]= await pool.query('Select * from USUARIOS where user = ?',[usuario]); 
        if(rows.length === 0){
            console.log('Usuario no encontrado');
            throw new Error('Usuario no encontrado');
        }
        const user = rows[0];
        if(!user.password){
            throw new Error('La columna password no fue encontrada o está vacía');
        }
        const validarPassword= await bcrypt.compare(password, rows[0].password);

        if(validarPassword && rows[0].estado === 'activo'){
            const token = jwt.sign({ id: rows[0].id, usuario: rows[0].usuario, cargo: rows[0].cargo }, jwtSecret, { expiresIn: '1h' });
            return { ...rows[0], token };
        }
        else if(!validarPassword){
            console.log('Credenciales incorrectas');
            throw new Error('Credenciales incorrectas');
        }
        else if(rows[0].estado !== 'activo'){
            console.log('Usuario no encontrado');
            throw new Error('Usuario no encontrado');
        }
    } catch (error) {
        throw error;
    }
};