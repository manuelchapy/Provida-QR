const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'providadb',
    user: 'root',
    password: ''
});

// Función para conectar a la base de datos
const connectSQL = () => {
    connection.connect((err) => {
        if (err) {
            console.error('Error conectando a MySQL:', err);
            return;
        }
        console.log('Conectado a MySQL como id ' + connection.threadId);
    });
};

// Función para cerrar la conexión
const closeSQL = () => {
    connection.end((err) => {
        if (err) {
            console.error('Error cerrando conexión MySQL:', err);
            return;
        }
        console.log('Conexión MySQL cerrada');
    });
};

module.exports = {
    connection,
    connectSQL,
    closeSQL
};
