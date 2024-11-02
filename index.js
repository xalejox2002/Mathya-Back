// Importación de librerias 
// Activar y configurar servidor 
import express from 'express';

// Permisos de conexión
import cors from 'cors';

// Conexión con la base de datos PostgreSQL
import pg from 'pg';
import loginRouters from "./Routes/LoginRouter.js";

// Puertoi con el cual se haran las llamadas al servidor 
const puerto = 8090;
const app = express();

app.use(cors({
    origin: '*', // Permite cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite métodos comunes
    allowedHeaders: ['Content-Type', 'Authorization'] // Permite ciertos encabezados
}));
app.use(express.json()); 

// Credenciales de la base de datos PostgreSQL
export const credenciales = new pg.Client({
    user: 'postgres.cdnepkqqjxdrcioxdnrn',
    host: 'aws-0-us-west-1.pooler.supabase.com',
    database: 'mathya',
    password: 'Mathya2024*',
    port: 6543
});

// Conexión a la base de datos PostgreSQL
credenciales.connect((err) => {
    if (err) {
        console.error("Error al conectar con la base de datos: ", err.stack);
    } else {
        console.log("Conectado a la base de datos");
    }
});

// Definición ruta 
app.use("/login", loginRouters);

app.listen(puerto, () => {
    console.log(`El servidor se está ejecutando en el puerto ${puerto}`);
});