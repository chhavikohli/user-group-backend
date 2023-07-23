const express = require('express');
const bodyParser = require('body-parser');
const users = require('./router/users');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/users');

app.use('/users', users);

 app.listen('8080', function () {
    console.log('application started at 8000');
});

