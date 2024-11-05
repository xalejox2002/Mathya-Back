import { credenciales } from "../index.js";

// Función asincrónica para autenticación de usuario
export async function login(req, res) {
    const { correo, password } = req.body;

    try {
        const queryText = "SELECT * FROM usuarios WHERE correo = $1 AND password = $2";
        const values = [correo, password];

        // Ejecutamos la consulta y esperamos la respuesta
        const documento = await credenciales.query(queryText, values);

        // Verificamos si se encontraron credenciales válidas
        if (documento.rows.length > 0) {
            res.status(200).json(documento.rows);
        } else {
            res.status(401).json({ error: "Credenciales incorrectas" });
        }
    } catch (err) {
        console.error("Error en la consulta de login:", err);
        res.status(500).json({ error: "Error interno del servidor. Intente nuevamente más tarde." });
    }
}
