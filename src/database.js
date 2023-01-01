//require('dotenv').config();
const {connect} = require('mongoose');
//import connect from "mongoose";

//funcion anonima

(async () => {
    try {
        //mongodb://localhost/providaQR
        //mongodb+srv://Chapy:chapybass@providadb.evwbf.mongodb.net/ProVidaDB?retryWrites=true&w=majority
        const db = await connect("mongodb+srv://Chapy:chapybass@providadb.evwbf.mongodb.net/ProVidaDB?retryWrites=true&w=majority")
        console.log('DB connected', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()
