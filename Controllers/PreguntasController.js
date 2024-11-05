import { credenciales } from '../index.js';

export async function getPreguntasPorModulo(req, res) {
    const { id_modulo } = req.params;

    try {
        const query = 'SELECT * FROM preguntas WHERE id_modulo = $1';
        const { rows } = await credenciales.query(query, [id_modulo]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'No se encontraron preguntas para este módulo' });
        }

        res.status(200).json(rows);
    } catch (err) {
        console.error('Error al obtener preguntas:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
