const express = require('express');
const app = express();
const sequelize = require('./db/conn');
const Usuario = require('./db/usuario');
const usuarioController = require('./controller/usuario.controller');

app.use(express.json());
app.use('/api', usuarioController);

app.listen(3000, async () => {
    try {
        await sequelize.authenticate();
        //Usuario.sync({alter: true});
        console.log('OK');
    } catch (error) {
        console.log('Error de servidor')
    } 
})