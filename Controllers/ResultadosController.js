import { credenciales } from "../index.js";

export async function registrarResultado(req, res) {
    const { id_usuario, id_modulo, id_pregunta, puntaje } = req.body;

    try {
        const queryInsert = `
            INSERT INTO resultados (id_usuario, id_modulo, id_pregunta, puntaje)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `;

        const { rows } = await credenciales.query(queryInsert, [id_usuario, id_modulo, id_pregunta, puntaje]);

        res.status(201).json(rows[0]);
    } catch (err) {
        console.error("Error al registrar resultado:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

// Obtener resultados por usuario
export async function obtenerResultadosPorUsuario(req, res) {
    const { id_usuario } = req.params;

    try {
        const querySelect = `
            SELECT * FROM resultados WHERE id_usuario = $1
        `;
        const { rows } = await credenciales.query(querySelect, [id_usuario]);

        res.status(200).json(rows);
    } catch (err) {
        console.error("Error al obtener resultados por usuario:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

// Obtener resultados por módulo
export async function obtenerResultadosPorModulo(req, res) {
    const { id_modulo } = req.params;

    try {
        const querySelect = `
            SELECT * FROM resultados WHERE id_modulo = $1
        `;
        const { rows } = await credenciales.query(querySelect, [id_modulo]);

        res.status(200).json(rows);
    } catch (err) {
        console.error("Error al obtener resultados por módulo:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}
