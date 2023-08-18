// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/solarAlconDB";

// var connection = {};

// connection.getConnection = function() {
//     return MongoClient.connect(url).then(function(database) {
//         return database.db();
//     }).catch(function(error) {
//         throw new Error("Could not connect to Database");
//     })
// }

// module.exports = connection;

const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/greenDB';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

module.exports = db;
