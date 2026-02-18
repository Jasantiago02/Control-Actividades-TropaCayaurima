import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// Llamada de las dependencias
dotenv.config();
const app = express();
// Configuracion de puerto
app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});
// Configuracion de cors
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// COnfiguracion Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));