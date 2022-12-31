const {Schema, model} = require('mongoose');
//const moment = require('moment-timezone');

const clienteSchema = new Schema({
	idCliente: 			{type: Number, required: true},
	clienteNombre:   	{type: String, required: true},
	clienteApellido:   	{type: String, required: true},
	cedula_RIF: 		{type: String, required: true, unique: true},
	contacto: 			{type: String},
	correo: 			{type: String, required: true},
	telefono: 			{type: String, required: true},
	tipoCliente: 		{type: String, required: true},
    qr:                 {type: String, required: true},
});

clientes = model('clientes', clienteSchema, 'clientes');

module.exports = clientes;