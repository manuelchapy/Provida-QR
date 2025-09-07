const { connection, connectSQL, closeSQL } = require('../src/databaseSQL');
const cultivos = require('../models/cultivos');
const { connect } = require('mongoose');

// Función principal para el volcado de cultivos
async function volcadoCultivos() {
    try {
        console.log('🔄 Iniciando volcado de cultivos...');
        
        // 1. Conectar a MongoDB
        console.log('📡 Conectando a MongoDB...');
        await connect("mongodb+srv://Chapy:chapybass@providadb.evwbf.mongodb.net/ProVidaDB?retryWrites=true&w=majority");
        console.log('✅ Conectado a MongoDB');
        
        // 2. Conectar a MySQL
        console.log('📡 Conectando a MySQL...');
        connectSQL();
        
        // 3. Eliminar todos los registros de la colección cultivos
        console.log('🗑️ Eliminando registros existentes en la colección cultivos...');
        await cultivos.deleteMany({});
        console.log('✅ Registros eliminados exitosamente');
        
        // 4. Hacer SELECT en MySQL
        console.log('📊 Consultando datos de MySQL...');
        const query = 'SELECT cultivo_codigo, cultivo_nombre, cultivo_precio FROM tbl_cultivo';
        
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
                const cultivosData = results.map(row => ({
                    cultivo_codigo: row.cultivo_codigo || '',
                    cultivo_nombre: row.cultivo_nombre || '',
                    cultivo_precio: parseFloat(row.cultivo_precio) || 0
                }));
                
                // 6. Insertar en MongoDB con insertMany
                console.log('💾 Insertando datos en MongoDB...');
                const insertResult = await cultivos.insertMany(cultivosData);
                console.log(`✅ Se insertaron ${insertResult.length} registros en MongoDB`);
                
                console.log('🎉 Volcado de cultivos completado exitosamente');
                
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
    volcadoCultivos();
}

module.exports = volcadoCultivos;
