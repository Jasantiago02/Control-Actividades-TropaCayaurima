import pool from './db.js'

export class Patrullas 
{
    constructor(nombre){
        nombre=nombre;
    }
    async crear_patrulla(){
        try{
            const [result] = await pool.query('INSERT INTO PATRULLAS (NOMBRE) VALUES (?)',this.nombre);
            if(result.affectedRows===0)
            {
                console.log('No se pudo resgistrar la patrulla');
                throw new error('No se pudo registrar la patrulla');
            }
            return {...result, message: 'Registro exitoso'};
        }catch(error){
            console.error(error);
            throw error;
        }
    }
    async obtener_patrulla(){
        try{
            const [result] = await pool.query('SELECT nombre fromk patrullas');
            if(result.length === 0){
                console.log('No encontrado');
                throw new error('No encontrado');
            }
            return result;
        }catch(error){
            console.error(error);
            throw error;
        }  
    }
    async integrantesXpatrulla(id){
        try{
            const[result]= await pool.query('Select p.nombre, s.nombre,s.apellido, s.fecha_nacimiento, s.genero, s.telefono, s.correo, s.fecha_admision, s.cedula_propia from scouts s, patrullas p where s.patrulla_id = p.id');
            if(result.length===0){
                console.log('No se ha encontrado los datos');
                throw new error('No se ha encontrado los datos');
            }
            return result;
        }catch(error){
            console.error(error);
            throw error;
        } 
    }
    async actualizar_patrulla(id){
        try{
            const [result]= await pool.query('UPDATE PATRULLAS SET NOMBRE=? WHERE id=?',[this.nombre,id]);
            if(result.affectedRows===0){
                console.log('Error al actualizar los datos');
                throw new error('Error al actualizar los datos');
            }
            return {...result, message: 'Se ha actualizado con exito'};
        }catch(error){
            console.error(error);
            throw error;
        } 
    }
    async eliminar_patrulla(id,estado){
        const [result]= await pool.query('UPDATE PATRULLAS SET ESTADO=? WHERE id=?',[estado,id]);
        if(result.affectedRows===0)
        {
            console.log('Error al actualizar estado');
            throw new error('Error al actualizar estado');
        }
        return {...result, message:'Estado actualizado con exito'};
    }
}