var express = require('express');
var routing = express.Router();
var AllocatorBL = require('../public/javascripts/AllocatorBL');
var SolarHeater = require('../public/javascripts/SolarHeater');

routing.post('/allocate', function(req, res, next) {
    var assign = SolarHeater.toObject(req.body);
    AllocatorBL.allocate(assign).then(function (solarHeater) {
        res.json({ "message": "Solar Heater " + solarHeater.solarHeaterId });
    }).catch(function (err) {
        next(err);
    })
});

module.exports = routing;