import pool from './db.js'
import dotenv from 'dotenv'

dotenv.config()

export class Usuarios {
    constructor(id,nombre,apellido,genero,telefono,cargo,usuario,password,estado){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.genero=genero;
        this.telefono=telefono;
        this.cargo=cargo;
        this.usuario=usuario;
        this.password=password;
        this.estado=estado;
    }
    async crear_usuario(){
        try {
            const hash_password = await bcrypt.hash(this.password, 10);
            const [rows] = await pool.query('INSERT INTO USUARIOS (id,nombre,apellido,genero,telefono,cargo,usuario,password) VALUES (?,?,?,?,?,?,?,?)',
                [this.id,
                 this.nombre,
                 this.apellido,
                 this.genero,
                 this.telefono,
                 this.cargo,
                 this.usuario,
                 hash_password
                ]);
            if (rows.affectedRows === 0) {
                throw new Error('No se pudo crear el usuario');
            }
            return rows;
        }
        catch (error) {
            console.error('Error al crear el usuario:', error);
            throw error;
        }
    }

    async obtener_usuario_por_id(){
        try{
            const [rows] = await pool.query('SELECT * FROM USUARIOS WHERE id = ?', [this.id]);
            if(rows.length===0)
            {
                throw new Error('Usuario no ha sido encontrado');
            }
            return rows[0];
        }
        catch (error) {
            console.error('Error al obtener el usuario:', error);
            throw error;
        }
    }

    async actualizar_usuario(){
        try{
            const [rows] = await pool.query('UPDATE USUARIOS SET nombre = ?, apellido = ?, genero = ?, telefono = ?, cargo = ?, usuario = ?, password = ? WHERE id = ?',
                [this.nombre,
                 this.apellido,
                 this.genero,
                 this.telefono,
                 this.cargo,
                 this.usuario,
                 this.password,
                 this.id
                ]);
            if (rows.affectedRows === 0) {
                throw new Error('No se pudo actualizar el usuario');
            }
            return rows;
        }
        catch (error) {
            console.error('Error al actualizar el usuario:', error);
            throw error;
        }
    }

    async eliminar_usuario(){
        try{
            const [rows] = await pool.query('UPDATE USUARIOS SET estado = ? WHERE id = ?', [this.estado, this.id]);
            if (rows.affectedRows === 0) {
                throw new Error('No se pudo eliminar el usuario');
            }
            return rows;
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
            throw error;
        }
    }
    async listar_usuarios(){
        try{
            const [rows] = await pool.query('SELECT * FROM USUARIOS');
            return rows;
        } catch (error) {
            console.error('Error al listar los usuarios:', error);
            throw error;
        }
    }
}