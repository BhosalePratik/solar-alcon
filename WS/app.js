var express = require('express');
var app = express();
var database = require('./database');
app.listen(3050);
console.log("Server started at port 3050!");