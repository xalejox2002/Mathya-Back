import express from 'express';
import { getPreguntasPorModulo } from '../Controllers/PreguntasController.js';

const router = express.Router();

router.get('/modulos/:id_modulo/preguntas', getPreguntasPorModulo);

export default router;
