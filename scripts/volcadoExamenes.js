const { connection, connectSQL, closeSQL } = require('../src/databaseSQL');
const examenes = require('../models/examenes');
const { connect } = require('mongoose');

// Función principal para el volcado de exámenes
async function volcadoExamenes() {
    try {
        console.log('🔄 Iniciando volcado de exámenes...');
        
        // 1. Conectar a MongoDB
        console.log('📡 Conectando a MongoDB...');
        await connect("mongodb+srv://Chapy:chapybass@providadb.evwbf.mongodb.net/ProVidaDB?retryWrites=true&w=majority");
        console.log('✅ Conectado a MongoDB');
        
        // 2. Conectar a MySQL
        console.log('📡 Conectando a MySQL...');
        connectSQL();
        
        // 3. Eliminar todos los registros de la colección examenes
        console.log('🗑️ Eliminando registros existentes en la colección examenes...');
        await examenes.deleteMany({});
        console.log('✅ Registros eliminados exitosamente');
        
        // 4. Hacer SELECT en MySQL
        console.log('📊 Consultando datos de MySQL...');
        const query = 'SELECT examen_codigo, examen_nombre, examen_precio, examen_referencia FROM tbl_examen';
        
        connection.query(query, async (err, results) => {
            if (err) {
                console.error('❌ Error en consulta MySQL:', err);
                closeSQL();
                return;
            }
            
            console.log(`📋 Se encontraron ${results.length} registros en MySQL`);
            
            if (results.length === 0) {
                console.log('⚠️ No hay registros para migrar');
                closeSQL();
                return;
            }
            
            try {
                // 5. Acondicionar los datos para MongoDB
                console.log('🔄 Acondicionando datos...');
                const examenesData = results.map(row => ({
                    examen_codigo: row.examen_codigo || '',
                    examen_nombre: row.examen_nombre || '',
                    examen_precio: parseFloat(row.examen_precio) || 0,
                    examen_referencia: row.examen_referencia || ''
                }));
                
                // 6. Insertar en MongoDB con insertMany
                console.log('💾 Insertando datos en MongoDB...');
                const insertResult = await examenes.insertMany(examenesData);
                console.log(`✅ Se insertaron ${insertResult.length} registros en MongoDB`);
                
                console.log('🎉 Volcado de exámenes completado exitosamente');
                
            } catch (mongoError) {
                console.error('❌ Error insertando en MongoDB:', mongoError);
            } finally {
                // Cerrar conexión MySQL
                closeSQL();
            }
        });
        
    } catch (error) {
        console.error('❌ Error general:', error);
        closeSQL();
    }
}

// Ejecutar el script si se llama directamente
if (require.main === module) {
    volcadoExamenes();
}

module.exports = volcadoExamenes;
