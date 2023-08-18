const mongoose = require('mongoose');
const customerSchema = require('../schemas/customerSchema');

const customerObj = {};
const customerModel = mongoose.model('cust', mongoose.Schema(customerSchema), 'customer');

customerObj.getCustomer = function (user) {
    return customerModel.findOne({ emailId: user }).then(function(data) {
        return data;
    });
};

module.exports = customerObj;