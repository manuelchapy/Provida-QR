const {Schema, model} = require('mongoose');
//const moment = require('moment-timezone');

const resultadoSchema = new Schema({
    resultados:             [],
    datosPaciente:          [],
    qr_documento:		    {type: String},
    qr_orden:		        {type: String},
    fecha_orden:            {type: String},
    tipo:                   {type: Number}, //1 PARA EXAMEN 2 PARA CULTIVO
    modificado:             {type: Number}  //0 PARA PENDIENTE POR MODIFICAR EN CLOUD, 1 PARA MODIFICAO EN CLOUD
});

clientes = model('resultados_qrs', resultadoSchema, 'resultados_qrs');

module.exports = clientes;