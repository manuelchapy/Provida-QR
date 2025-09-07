const {Schema, model} = require('mongoose');
//const moment = require('moment-timezone');

const cultivoSchema = new Schema({
    cultivo_codigo:         {type: String},
    cultivo_nombre:         {type: String},
    cultivo_precio:         {type: Number}
});

cultivos = model('cultivos', cultivoSchema, 'cultivos');

module.exports = cultivos;
