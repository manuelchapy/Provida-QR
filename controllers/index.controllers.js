const indexCtrl = {};
const facturaModel = require("../models/facturas");
const resultadoModel = require("../models/resultados");

indexCtrl.home = async(req, res) =>{
    console.log('OLA K ASE');
    res.send('OLA K ASE');
};

indexCtrl.buscarFactura = async(req, res) =>{
    console.log('OLA K ASE');
    //res.send('OLA K ASE');

    let factura;
    let qr = req.body.qr;
    factura = await buscarFactura(qr);
    res.send(factura);

    async function buscarFactura(qr){
        return new Promise((resolve, reject) => {
            let factura, bool;
            factura = facturaModel.findOne({factura_qr: qr});
            //factura = facturaModel.find();
            //console.log("RESULTADO", factura)
            resolve(factura);
        })
    }
};

indexCtrl.buscarResultado = async(req, res) =>{
    console.log('OLA K ASE');
    //res.send('OLA K ASE');

    let resultado;
    let qr = req.body.qr;
    resultado = await buscarResultado(qr);
    res.send(resultado);

    async function buscarResultado(qr){
        console.log("!!!!!!!!!!!!!!!!!!!!!11", qr)
        return new Promise((resolve, reject) => {
            let resultado, bool;
            resultado = resultadoModel.find({qr_documento: qr});
            //console.log("RESULTADO", factura)
            resolve(resultado);
        })
    }
};

module.exports = indexCtrl;