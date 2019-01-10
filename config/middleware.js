const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

module.exports = server => {
    server.use(helmet());  // adds security? hides use of express / what stack/framework you are using to develop
    server.use(express.json()); //build-in middleware
    server.use(morgan('short')); // logging middleware
    server.use(cors());
}
