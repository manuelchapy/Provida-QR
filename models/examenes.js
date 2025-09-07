const {Schema, model} = require('mongoose');
//const moment = require('moment-timezone');

const examenSchema = new Schema({
    examen_codigo:          {type: String},
    examen_nombre:          {type: String},
    examen_precio:          {type: Number},
    examen_referencia:      {type: String}
});

examenes = model('examenes', examenSchema, 'examenes');

module.exports = examenes;
