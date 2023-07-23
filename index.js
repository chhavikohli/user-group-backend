const express = require('express');
const bodyParser = require('body-parser');
const users = require('./router/users');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
  // Enable CORS for all routes
app.use(cors());
mongoose.connect('mongodb://localhost/users');

app.use('/users', users);

 app.listen('8080', function () {
    console.log('application started at 8000');
});

