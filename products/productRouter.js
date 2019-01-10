const express = require('express');

const router = express.Router();

// middleware

//routes / endpoints
router.get('/', (req,res) => {
    res.send('GET /products endpoint')
})

// /products/:id
router.get('/:id', (req,res) => {
    res.send(`GET /products/${req.params.id}`);
})

module.exports = router;