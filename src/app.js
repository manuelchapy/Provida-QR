const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 5000);

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// middlewares
app.use(express.urlencoded({extended: false}));	
app.use(cors()); //cada vez que llegue una petición a mi servidor va permitir poder enviar y recibir datos
app.use(express.json()); //desde mi servidor se puede ver info en formato json y string

app.use(require('../routes'));
app.use(require('../routes/index'));
app.use(require('../routes/clientes'));
app.use('/examenes-cultivos', require('../routes/examenesCultivos'));

module.exports = app;