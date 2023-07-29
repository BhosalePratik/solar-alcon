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

routing.get('/getallocations', function(req, res, next) {
    AllocatorBL.getAllBooking().then(function (allocations) {
        res.json(allocations);
    }).catch(function (err) {
        next(err);
    })
});

routing.get('/getSolarHeaterIds', function (req, res, next) {
    AllocatorBL.getSolarHeaterIds().then(function (ids) {
        res.json(ids);
    }).catch(function (err) {
        next(err);
    })
});

routing.get('/getHeaterById/:id', function(req, res, next) {
    AllocatorBL.getDataOfId(req.params.id).then(function (data) {
        res.json(data);
    }).catch(function (err) {
        next(err);
    })
});

module.exports = routing;