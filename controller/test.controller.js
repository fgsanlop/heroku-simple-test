const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).json('API de prueba');
})

module.exports = router;