const clientesCtrl = {};
const clienteModel = require("../models/clientes"); 

clientesCtrl.agregarCliente = async(req, res) =>{
    //console.log('OLA K ASE');

    let busqueda;
    let agregar;

    busqueda = await buscarCliente();


    if(busqueda == null){
        agregar = await agregarCliente();
        if(agregar == "1"){
            res.send("1")
        }else{
            res.send("0")
        }
    }else{
        res.send("3");
    }

    async function buscarCliente(){
        return new Promise((resolve, reject) => {
            let cliente;
            cliente = clienteModel.findOne({cedula_RIF: req.body.cedula_RIF});
            console.log("RESULTADO", cliente)
            resolve(cliente);
        });
    }

    async function agregarCliente(){
        return new Promise((resolve, reject) => {
            const cliente = clienteModel({
                idCliente: 			req.body.idCliente,
                clienteNombre:   	req.body.clienteNombre,
                clienteApellido:   	req.body.clienteApellido,
                cedula_RIF: 		req.body.cedula_RIF,
                contacto: 			req.body.contacto,
                correo: 			req.body.correo,
                telefono: 			req.body.telefono,
                tipoCliente: 		req.body.tipoCliente,
                qr:                 uniqid()
            })

            try {
                cliente.save();
                resolve("1")
            } catch (error) {
                resolve("0")
            }
        })
    }
};

module.exports = clientesCtrl;