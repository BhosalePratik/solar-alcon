var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes/Routing');
var database = require('./database');
var requestLogger = require('./public/javascripts/RequestLogger');
var errorLogger = require('./public/javascripts/ErrorLogger');

var cors = require('cors');
var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(requestLogger);

app.use('/', router);

app.use(errorLogger);
app.listen(3050);
console.log("Server started at port 3050!");