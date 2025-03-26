'use strict';

require('dotenv').config();
const db = require('./app/config/db');
const App = require('./app/app');

const PORT = parseInt(process.env.PORT || process.env.APP_PORT || 3000, 10);

// Sincronizar base de datos primero
db.sequelizeInstance.sync()
  .then(() => {
    console.info("✅ Base de Datos sincronizada correctamente.");

    // Iniciar servidor después de sincronizar DB
    App.listen(PORT, (error) => {
      if (error) {
        return console.error("❌ Error al iniciar el servidor:", error);
      }
      console.info(`🚀 Servidor corriendo en el puerto: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error al sincronizar la base de datos:", error);
  });
