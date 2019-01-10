// module.exports = { 
//     greet,
//     secret: 'shhhh' 
// };

// module.exports.greeting = 'Hello there';

// function greet() {
//     console.log('\nserver.js\n')
// }

const express = require('express')

const configureMiddleware = require('../config/middleware.js');

const doubler = require('../common/doublerMiddleware.js');
const productsRouter = require('../products/productRouter.js');
const clientsRouter = require('../clients/clientsRouter.js')
const server = express();


configureMiddleware(server);

server.use('/products', productsRouter);
server.use('/clients', clientsRouter);

//routes
server.get('/', (req,res) => {
    res.send(`sanity check success (partially)`);
});

// LOCAL USE OF MIDDLEWARE!
server.get('/double', doubler, (req,res) => {
    res.send(`the value is ${req.query.number} and double is ${req.double}`);
});

server.get('/:id', (req,res) => {
    res.send(`sanity id: ${req.params.id}`);
});


module.exports = server;