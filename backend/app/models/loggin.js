import pool from './db.js';
import dotenv from 'dotenv'

dotenv.config()
const jwtSecret = process.env.JWT_SECRET;
export class Loggin {
    constructor(usuario,password){
        this.usuario=usuario;
        this.password=password;
    }
    async autenticar_usuario(){
        try{
            const [rows] = await pool.query('SELECT * FROM USUARIOS WHERE usuario = ?', [this.usuario]);
            if(rows.length===0)
            {
                throw new Error('Usuario no ha sido encontrado');
            }
            const user = rows[0];
            const isPasswordValid = await bcrypt.compare(this.password, user.password);
            if(isPasswordValid && user.estado === 'activo' ) {
                const token = jwt.sign({ id: user.id, usuario: user.usuario }, jwtSecret, { expiresIn: '1h' });
                return { ...user, token };
            }
            else if (!isPasswordValid) {
                throw new Error('Credenciales incorrectas');
            }
            else if (user.estado !== 'activo') {
                throw new Error('No se ha encontrado el usuario');
            }
        }
        catch (error) {
            console.error('Error al autenticar el usuario:', error);
            throw error;
        }
    }

    async restablecer_contraseña(id, nuevaContraseña) {
        try {
            const hash_password = await bcrypt.hash(nuevaContraseña, 10);
            const [rows] = await pool.query('UPDATE USUARIOS SET password = ? WHERE id = ?', [hash_password, id]);
            if (rows.affectedRows === 0) {
                throw new Error('No se pudo restablecer la contraseña');
            }
            return rows;
        } catch (error) {
            console.error('Error al restablecer la contraseña:', error);
            throw error;
        }
    }
    async cerrar_sesion(token) {
        try{
            const decoded = jwt.verify(token, jwtSecret);
            if (!decoded) {
                throw new Error('Token inválido');
            }
            return { message: 'Sesión cerrada exitosamente' };
        }
        catch (error) {
            console.error('Error al cerrar sesión:', error);
            throw error;
        }
    }
    async verificar_token(token) {
        try {
            const decoded = jwt.verify(token, jwtSecret);
            if (!decoded) {
                throw new Error('Token inválido');
            }
            return decoded;
        } catch (error) {
            console.error('Error al verificar el token:', error);
            throw error;
        }
    }
}