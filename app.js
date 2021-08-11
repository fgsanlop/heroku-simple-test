const express = require('express');
const app = express();
const sequelize = require('./db/conn');
const Usuario = require('./db/usuario');
const usuarioController = require('./controller/usuario.controller');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(usuarioController);

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        //Usuario.sync({alter: true});
        console.log(`App is running on port ${ PORT }`);
    } catch (error) {
        console.log('Error de servidor')
    } 
})