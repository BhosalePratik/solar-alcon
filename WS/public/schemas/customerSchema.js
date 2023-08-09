const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    "street": String,
    "locality": String,
    "city": String,
    "state": String,
    "pin": Number
});

const customerSchema = new mongoose.Schema({
    "name": String,
    "emailId": String,
    "password": String,
    "customerId": Number,
    "contactNumber": Number,
    "address": addressSchema
});

module.exports = customerSchema;