var utility = {};

utility.formatDate = function (date) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    temp = new Date(date).toLocaleDateString('en-US', options);
    console.log("In conversion: ", temp);
    return temp;
};

module.exports = utility;