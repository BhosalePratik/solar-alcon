var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/solarAlconDB";

var connection = {};

connection.getConnection = function() {
    return MongoClient.connect(url).then(function(database) {
        return database.db();
    }).catch(function(error) {
        throw new Error("Could not connect to Database");
    })
}

module.exports = connection;