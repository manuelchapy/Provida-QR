const express = require('express');
const router = express.Router();
const {
    obtenerExamenes,
    buscarExamenes,
    obtenerCultivos,
    buscarCultivos,
    mostrarVista
} = require('../controllers/examenesCultivos.controllers');

// Ruta para mostrar la vista principal
router.get('/', mostrarVista);

// Rutas API para exámenes
router.get('/api/examenes', obtenerExamenes);
router.get('/api/examenes/buscar', buscarExamenes);

// Rutas API para cultivos
router.get('/api/cultivos', obtenerCultivos);
router.get('/api/cultivos/buscar', buscarCultivos);

module.exports = router;
