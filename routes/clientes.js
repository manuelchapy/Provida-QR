const { Router } = require('express');
const Ctrlindex	= require('../controllers/clientes.controllers');
const router = Router();

router.route('/agregarCliente')
		.post(Ctrlindex.agregarCliente)

module.exports = router;