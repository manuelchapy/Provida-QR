//require('dotenv').config();
const {connect} = require('mongoose');
//import connect from "mongoose";

//funcion anonima
(async () => {
    try {
        const db = await connect("mongodb://localhost/providaQRCloud")
        console.log('DB connected', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()
