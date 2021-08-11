const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.CONN_STRING);
 
module.exports = sequelize;