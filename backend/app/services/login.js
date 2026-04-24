import pool from './db.js';
import dotenv from 'dotenv';

dotenv.confing();
const jwtSecret= process.env.JWTSECRET;

export async function  login (usuario, password){
    try {
        const [rows]= await pool.query('Select * from USUARIOS wher usuario = ?',[usuario]); 
        if(rows.length === 0){
            console.log('Usuario no encontrado');
            throw new Error('Usuario no encontrado');
        }
        const validarPassword= await bcrypt.compare(password, rows[0].password);
        if(validarPassword && rows[0].estado === 'activo'){
            const token = jwt.sign({ id: rows[0].id, usuario: rows[0].usuario }, jwtSecret, { expiresIn: '1h' });
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
}