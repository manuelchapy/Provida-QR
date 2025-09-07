const examenes = require('../models/examenes');
const cultivos = require('../models/cultivos');

// Función para obtener todos los exámenes
const obtenerExamenes = async (req, res) => {
    try {
        const examenesData = await examenes.find({});
        res.json(examenesData);
    } catch (error) {
        console.error('Error obteniendo exámenes:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Función para buscar exámenes por coincidencia
const buscarExamenes = async (req, res) => {
    try {
        const { termino } = req.query;
        
        if (!termino) {
            const examenesData = await examenes.find({});
            return res.json(examenesData);
        }

        const examenesData = await examenes.find({
            $or: [
                { examen_codigo: { $regex: termino, $options: 'i' } },
                { examen_nombre: { $regex: termino, $options: 'i' } },
                { examen_referencia: { $regex: termino, $options: 'i' } }
            ]
        });
        
        res.json(examenesData);
    } catch (error) {
        console.error('Error buscando exámenes:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Función para obtener todos los cultivos
const obtenerCultivos = async (req, res) => {
    try {
        const cultivosData = await cultivos.find({});
        res.json(cultivosData);
    } catch (error) {
        console.error('Error obteniendo cultivos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Función para buscar cultivos por coincidencia
const buscarCultivos = async (req, res) => {
    try {
        const { termino } = req.query;
        
        if (!termino) {
            const cultivosData = await cultivos.find({});
            return res.json(cultivosData);
        }

        const cultivosData = await cultivos.find({
            $or: [
                { cultivo_codigo: { $regex: termino, $options: 'i' } },
                { cultivo_nombre: { $regex: termino, $options: 'i' } }
            ]
        });
        
        res.json(cultivosData);
    } catch (error) {
        console.error('Error buscando cultivos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Función para mostrar la vista principal
const mostrarVista = async (req, res) => {
    try {
        res.render('examenes-cultivos', {
            title: 'Exámenes y Cultivos - ProVida QR'
        });
    } catch (error) {
        console.error('Error mostrando vista:', error);
        res.status(500).send('Error interno del servidor');
    }
};

module.exports = {
    obtenerExamenes,
    buscarExamenes,
    obtenerCultivos,
    buscarCultivos,
    mostrarVista
};
