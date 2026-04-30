import { hash } from "bcryptjs";
import {login}  from "../services/login.js";
import dotenv from 'dotenv';
import bcrypt from "bcryptjs";
dotenv.config();

export const loginController = async (req, res) => {
    const { usuario, password } = req.body;
    try {
        if(!usuario || !password){
            console.log(usuario, password);
            return res.status(400).json({ status:400, message: 'Datos imcompletos' });
        }
        const specialsChars = /[!#$%^&*(),?'\\_":{}|<>]/g;
        if(specialsChars.test(usuario) || specialsChars.test(password)){
            return res.status(400).json({ status:400, message: 'Caracteres especiales detectados' });
        }
        const user = await login(usuario, password);
        res.status(200).json({ status:200, message: 'Login exitoso', data: user });
    } catch (error) {
        console.error('Error en el loginController:', error);
        res.status(400).json({ error: error.message });
    }
}