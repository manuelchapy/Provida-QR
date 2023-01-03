const {Schema, model} = require('mongoose');
//const moment = require('moment-timezone');

const clienteSchema = new Schema({
	idCliente: 			{type: Number},
	clienteNombre:   	{type: String},
	clienteApellido:   	{type: String},
	cedula_RIF: 		{type: String},
	contacto: 			{type: String},
	correo: 			{type: String},
	telefono: 			{type: String},
	tipoCliente: 		{type: String},
    qr:                 {type: String},
});

clientes = model('clientes_qrs', clienteSchema, 'clientes_qrs');

module.exports = clientes;