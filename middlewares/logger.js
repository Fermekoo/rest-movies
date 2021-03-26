const express = require('express');
const app     = express();
const Log     = require('../models/Log');

module.exports = async function (req, res, next) {
    const endpoint = req.originalUrl;
        Log.create({
            endpoint
        });
        next();
       
};