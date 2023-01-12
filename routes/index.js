const { Router } = require('express');
const Ctrlindex	= require('../controllers/index.controllers');
const router = Router();

router.route('/')
		.get(Ctrlindex.home)

router.route('/buscarFactura')
		.post(Ctrlindex.buscarFactura)

router.route('/buscarFacturaPorFecha')
		.post(Ctrlindex.buscarFacturaPorFecha)

router.route('/buscarFacturaPorId')
		.post(Ctrlindex.buscarFacturaPorId)

router.route('/resultadosPorIdFactura')
		.post(Ctrlindex.resultadosPorIdFactura)
/*
router.route('/facturas')
		.get(Ctrlindex.facturas)
*/
router.route('/buscarResultado')
		.post(Ctrlindex.buscarResultado)


module.exports = router;