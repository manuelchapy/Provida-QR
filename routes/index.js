const { Router } = require('express');
const Ctrlindex	= require('../controllers/index.controllers');
const router = Router();

router.route('/')
		.get(Ctrlindex.home)

router.route('/buscarFactura')
		.post(Ctrlindex.buscarFactura)

router.route('/buscarResultado')
		.post(Ctrlindex.buscarResultado)


module.exports = router;