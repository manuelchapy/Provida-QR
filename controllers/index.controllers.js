const indexCtrl = {};
const facturaModel = require("../models/facturas");
const resultadoModel = require("../models/resultados");
const clienteModel = require("../models/clientes");

indexCtrl.home = async(req, res) =>{
    console.log('OLA K ASE');
    res.send('OLA K ASE');
};

indexCtrl.facturas = async(req, res) =>{
    console.log('OLA K ASE');
    //res.send('OLA K ASE');
    if(req.body.clave == "q0qmi7YLxYKWTsIRubZZ38NSWBDZTNnVdvDPBaCx"){
        let factura;
        factura = await buscarFacturas();
        res.send(factura);

        async function buscarFacturas(){
            return new Promise((resolve, reject) => {
                let factura, bool;
                factura = facturaModel.find();
                //factura = facturaModel.find();
                //console.log("RESULTADO", factura)
                resolve(factura);
            })
        }
    }else if(Object.keys(req.body).length === 0){
        res.send("<h1>Error</h1>")
    }else {
        res.send("<h1>Error</h1>")
    }
};

indexCtrl.clientes = async(req, res) =>{
    console.log('OLA K ASE');
    //res.send('OLA K ASE');
    if(req.body.clave == "hi9pmsgNc4Y3QKA32rPDUh3PtFJPKRx6YcamodSU"){
        let clientes;
        clientes = await buscarClientes();
        res.send(clientes);
    
        async function buscarClientes(){
            return new Promise((resolve, reject) => {
                let clientes;
                clientes = clienteModel.find();
                //factura = facturaModel.find();
                //console.log("RESULTADO", factura)
                resolve(clientes);
            })
        }
    }else if(Object.keys(req.body).length === 0){
        res.send("<h1>Error</h1>")
    }else {
        res.send("<h1>Error</h1>")
    }

}

indexCtrl.buscarCliente = async(req, res) =>{
    console.log('OLA K ASE');
    //res.send('OLA K ASE');

    let cliente;
    let idCliente = req.body.id_cliente;
    cliente = await buscarCliente(idCliente);
    res.send(cliente);

    async function buscarCliente(idCliente){
        return new Promise((resolve, reject) => {
            let cliente;
            cliente = clienteModel.findOne({idCliente: idCliente});
            //factura = facturaModel.find();
            //console.log("RESULTADO", factura)
            resolve(cliente);
        })
    }
};

indexCtrl.buscarFacturaPorIdCliente = async(req, res) =>{
    console.log('OLA K ASE');
    //res.send('OLA K ASE');

    let factura;
    let idCliente = req.body.id_cliente;
    factura = await buscarFactura(idCliente);
    res.send(factura);

    async function buscarFactura(idCliente){
        return new Promise((resolve, reject) => {
            let factura;
            factura = facturaModel.find({id_cliente: idCliente});
            //factura = facturaModel.find();
            //console.log("RESULTADO", factura)
            resolve(factura);
        })
    }
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

indexCtrl.buscarFacturaPorFecha = async(req, res) =>{
    console.log('OLA K ASE');
    //res.send('OLA K ASE');
    let desde, hasta;
    desde = req.body.desde;
    hasta = req.body.hasta;
    factura = await buscarFactura(desde, hasta);
    res.send(factura);

    async function buscarFactura(desde, hasta){
        return new Promise((resolve, reject) => {
            let factura, bool;
            factura = facturaModel.find({fecha_creacion: { $gte: desde, $lte: hasta }});
            //factura = facturaModel.find();
            //console.log("RESULTADO", factura)
            resolve(factura);
        })
    }
};

indexCtrl.buscarFacturaPorId = async(req, res) =>{
    console.log('OLA K ASE');
    //res.send('OLA K ASE');

    let factura;
    let idFactura = req.body.id_factura;
    factura = await buscarFactura(idFactura);
    res.send(factura);

    async function buscarFactura(idFactura){
        return new Promise((resolve, reject) => {
            let factura, bool;
            factura = facturaModel.findOne({id_factura: idFactura});
            //factura = facturaModel.find();
            //console.log("RESULTADO", factura)
            resolve(factura);
        })
    }

};

indexCtrl.resultadosPorIdFactura = async(req, res) =>{
    console.log('OLA K ASE');
    //res.send('OLA K ASE');

    let factura;
    let resultados;
    let idFactura = req.body.id_factura;
    let resp = {};
    factura = await buscarFactura(idFactura);
    resultados = await buscarResultados(idFactura)
    resp.factura = factura;
    resp.resultados = resultados;
    console.log("......", resp)
    res.send(resp);

    async function buscarFactura(idFactura){
        return new Promise((resolve, reject) => {
            let factura, bool;
            factura = facturaModel.findOne({id_factura: idFactura});
            //factura = facturaModel.find();
            //console.log("RESULTADO", factura)
            resolve(factura);
        })
    }

    async function buscarResultados(idFactura){
        return new Promise((resolve, reject) => {
            let resultado, bool;
            resultado = resultadoModel.find({"datosPaciente.id_factura": idFactura});
            //console.log("RESULTADO", factura)
            resolve(resultado);
        })
    }


}

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