var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    // insertDocuments(db);
    insertDocuments(db, function () {
        db.close();
    });
});

var insertDocuments = function (db, callback, url_img) {
    // Get the documents collection
    // Insert some documents

    var collection = db.collection('images');
    var result = 0;
    collection.find().sort({ "_id": -1 }).limit(-1).toArray(function (err, docs) {
        // console.log(docs[0].id);
        // console.log(docs[0].id+1);
        result = docs[0]._id + 1;
        collection.insertMany([
            { "_id": result, url: url_img }
        ], function (err, result) {
            console.log("Inserted 1 documents into the document collection");
            callback(result);
        });
    });
}

var findDocuments = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('images');

    // Find some documents
    collection.find({ "_id": 2 }).toArray(function (err, docs) {
        console.log("Found the following records");
        console.dir(docs);
        callback(docs);
    });
}

var promise = new Promise(function a(resolve, reject) {

});


function getNextSequenceValue(sequenceName, db) {
    //get max value in database
    var collection = db.collection('images');
    var result = 0;
    collection.find().sort({ "id": -1 }).limit(-1).toArray(function (err, docs) {
        // console.log(docs[0].id);
        // console.log(docs[0].id+1);
        result = docs[0].id + 1;
    });
    console.log(result);
    return result;
}

