import { credenciales } from "../index.js";

// Creamos una función asincrona para esperar respuesta de la bd 
export async function login(req, res) {

    // Desde el body enviamos credenciales (Leemos datos y guardamos)
    const { correo, password } = req.body; 

    try {
        // Consulta SQL 
        const queryText = `SELECT * FROM usuarios where correo = '${correo}' AND password = '${password}'`;

        // Ejecutamos la consulta en la base de datos y esperamos la respuesta
        const documento = await credenciales.query(queryText);

        // Si es mayor a 0 es debido a que las credenciales son correctas
        if (documento.rows.length > 0) {
            res.status(200).json(documento.rows);
        } else {
            res.status(401).json({ error: "Credenciales incorrectas" });
        }
    } catch (err) {
        console.error("Error en la consulta de login:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}