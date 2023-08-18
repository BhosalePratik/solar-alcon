let customerModel = require('../models/customerModel');

let Login = {};

Login.validateLogin = function (username) {
    let data = customerModel.getCustomer(username);
    console.log(data);
    return data;
};

module.exports = Login;