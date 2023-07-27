var Validator = {};

Validator.validateCustomer = function(custmorId) {
    if (new String(custmorId).length != 4) {
        throw new Error("Invalid! Customer Id should be a 4 digit number");
    }
};

Validator.validateDate = function(pDate, iDate) {
    if (iDate < pDate) {
        console.log("In Validate: ", pDate);
        throw new Error("Installation date cannot be before Purchase date");
    }
};

module.exports = Validator;