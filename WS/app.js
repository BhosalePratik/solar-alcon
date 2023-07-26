var express = require('express');
var app = express();
var database = require('./database');
var requestLogger = require('./public/javascripts/RequestLogger');
var errorLogger = require('./public/javascripts/ErrorLogger');
app.use(requestLogger);
app.use(errorLogger);
app.listen(3050);
console.log("Server started at port 3050!");