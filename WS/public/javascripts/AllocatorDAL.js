var SolarHeater = require('./SolarHeater');
var Customer = require('./Customer');
var connection = require('./Connections');
var utility = require('./Utility');
var AllocatorDAL = {};

AllocatorDAL.checkCustomer = function (custmorId) {
    return connection.getConnection().then(function (db) {
        return db.collection("customer").findOne({ "customerId": custmorId }).then(function (result) {
            return result;
        });
    });
};

AllocatorDAL.allocateHeater = function (solarHeater) {
    console.log("The date: ", solarHeater.purchaseDate);
    var purchaseDate = utility.formatDate(solarHeater.purchaseDate);
    var installDate = utility.formatDate(solarHeater.installationDate);
    return connection.getConnection().then(function (db) {
        var myCollection = db.collection('solarHeaterAlcon');
        return AllocatorDAL.generateId().then(function (sId) {
            return myCollection.insertOne({
                "solarHeaterId": sId,
                "distributorName": solarHeater.distributorName,
                "purchaseDate": purchaseDate,
                "installationDate": installDate,
                "customerId": solarHeater.customerId
            }).then(function (result) {
                if (result.insertedCount != 1) {
                    throw new Error("Error in saving details");
                } else {
                    solarHeater.solarHeaterId = sId;
                    return solarHeater;
                }
            })
        })
    })
};

AllocatorDAL.generateId = function () {
    return connection.getConnection().then(function (db) {
        var myCollection = db.collection('solarHeaterAlcon');
        return myCollection.distinct("solarHeaterId").then(function (ids) {
            var maxSolarId = Math.max(...ids);
            return maxSolarId + 1;
        })
    })
};

AllocatorDAL.getAllBooking = function () {
    return connection.getConnection().then(function (db) {
        return db.collection('solarHeaterAlcon').find().toArray().then(function (allAllocations) {
            return allAllocations;
        }).catch(function (err) {
            return err;
        })
    })
};

AllocatorDAL.getSolarHeaterIds = function () {
    return connection.getConnection().then(function (db) {
        return db.collection('solarHeaterAlcon').distinct("solarHeaterId").then(function (solarHeaterIds) {
            return solarHeaterIds;
        })
    })
};

AllocatorDAL.getDataOfId = function (sId) {
    //console.log("value sent: ", sId);
    return connection.getConnection().then(function (db) {
        return db.collection('solarHeaterAlcon').findOne({ "solarHeaterId": sId }).then(function (data) {
            return SolarHeater.toObject(data);
        })
    })
};
 
module.exports = AllocatorDAL;