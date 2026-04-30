import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
//importacion de rutas
import loginRoutes from './routes/loginRoutes.js';
// Llamada de las dependencias
dotenv.config();
const app = express();
// Configuracion de puerto
app.set('port', process.env.PORT);


// Configuracion de cors
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Configuracion Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuracion de rutas
app.use('/api/v1', loginRoutes);

app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});