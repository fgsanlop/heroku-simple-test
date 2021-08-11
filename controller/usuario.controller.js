const UsuarioModel = require('../model/usuario.model');
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).json('API de prueba');
})

router.post('/usuario/registro', async (req,res) => {
    let body = req.body;
    try {
        let nuevoUsuario = new UsuarioModel(body.nombres, body.apellidos, body.telefono);
        console.log(nuevoUsuario);
        res.status(200).json(await nuevoUsuario.registrarUsuario());
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

router.get('/usuario/:id', async (req,res) => {
    let id = req.params.id;
    try {        
        res.status(200).json(await UsuarioModel.listarUsuario(id));
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

router.get('/usuarios/', async (req,res) => {    
    try {        
        res.status(200).json(await UsuarioModel.listarUsuarios());
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

module.exports = router;