const Sequelize = require('sequelize');

const sequelizeInstance = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST,
    dialect: 'mysql', // directamente definido para evitar errores
    port: process.env.MYSQLPORT,
    dialectOptions: {
      connectTimeout: 60000
    },
    pool: {
      max: parseInt(process.env.POOL_MAX || 5, 10),
      min: parseInt(process.env.POOL_MIN || 0, 10),
      acquire: parseInt(process.env.POOL_ACQUIRE || 30000, 10),
      idle: parseInt(process.env.POOL_IDLE || 10000, 10),
    },
  }
);

const db = {
  Sequelize,
  sequelizeInstance,
};

// modelos y relaciones aquí...

module.exports = db;
