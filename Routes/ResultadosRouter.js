import express from 'express';
import { registrarResultado, obtenerResultadosPorUsuario, obtenerResultadosPorModulo } from '../Controllers/ResultadosController.js';

const resultadosRouter = express.Router();

// Registrar un nuevo resultado
resultadosRouter.post('/', registrarResultado);

// Obtener resultados por usuario
resultadosRouter.get('/usuarios/:id_usuario', obtenerResultadosPorUsuario);

// Obtener resultados por módulo
resultadosRouter.get('/modulos/:id_modulo', obtenerResultadosPorModulo);

export default resultadosRouter;
