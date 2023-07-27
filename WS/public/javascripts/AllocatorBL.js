var SolarHeater = require('./SolarHeater');
var AllocatorDAL = require('./AllocatorDAL');
var Validator = require('./Validator');

var AllocatorBL = {};

AllocatorBL.allocate = function(solarHeater) {
    console.log("In BL: ", solarHeater.installationDate);
    Validator.validateCustomer(solarHeater.customerId);
    Validator.validateDate(solarHeater.purchaseDate, solarHeater.installationDate);
    return AllocatorDAL.checkCustomer(solarHeater.customerId).then(function(customer) {
        if (customer == null) {
            throw new Error("The given Customer Id is not available");
        }
        else {
            promise = AllocatorDAL.allocateHeater(solarHeater);
            console.log(promise);
            return promise;
        }
    }).then(function (solarHeaterFromDL) {
        return solarHeaterFromDL;
    });
};

module.exports = AllocatorBL;