const Sequelize = require('sequelize');

const sequelizeInstance = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
    port: process.env.MY_SQL_PORT,
    dialectOptions: {
      connectTimeout: 60000
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {
  Sequelize,
  sequelizeInstance,
};

// tus modelos y relaciones aquí

module.exports = db;
