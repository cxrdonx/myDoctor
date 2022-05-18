const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');  
const app = express();

app.use(bodyParser.urlencoded({encoded:false}));
const register = require('./routes/register');

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({encoded:false}));
app.use(bodyParser.json());

app.use('/', register); 

app.use(express.static(path.join( __dirname, 'public')));

//start the server
module.exports = app;