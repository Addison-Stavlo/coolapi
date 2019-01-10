const express = require('express');

const router = express.Router();

// middleware

//routes / endpoints
router.get('/', (req,res) => {
    res.send('GET /clients endpoint YAY')
})

// /products/:id
router.get('/:id', (req,res) => {
    res.send(`GET /clients/${req.params.id}`);
})

module.exports = router;