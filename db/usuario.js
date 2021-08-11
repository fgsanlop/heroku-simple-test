const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./conn');

const Usuario = sequelize.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Usuario;