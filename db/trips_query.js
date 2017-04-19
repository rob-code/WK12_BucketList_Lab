var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;

var TripsQuery = function(collectionName){
  this.url = 'mongodb://localhost:27017/bucket_list'
  this.collectionName = collectionName
}

TripsQuery.prototype = {
    all: function(onQueryFinished){
      MongoClient.connect(this.url, function(err, db){

        if (db){
          var collection = db.collection(this.collectionName);
          collection.find().toArray(function(err, docs){
            console.log(docs)
            onQueryFinished(docs);
          })
        }
      }.bind(this))
    },

  // //writing data to the db
  // add: function(yachtToAdd, onQueryFinished){
  //   MongoClient.connect(this.url, function(err, db){
  //     if(db){
  //       var collection = db.collection(this.collectionName);
  //       collection.insert(yachtToAdd);
  //       collection.find().toArray(function(err,docs){
  //         onQueryFinished(docs);
  //       })
  //     }
  //   }.bind(this));
  // },

  // delete: function(id, onQueryFinished){
  //   MongoClient.connect(this.url, function(err, db){

  //     if (db){
  //       var collection = db.collection(this.collectionName);
        
  //       console.log("The index is:  " + id)     
  //       collection.remove({ _id:ObjectID(id) } )
  //       collection.find().toArray(function(err, docs){
  //         onQueryFinished(docs);
  //       })
  //     }
  //   }.bind(this))
  // },

  // update: function(id, onQueryFinished){
  //   MongoClient.connect(this.url, newData, function(err, db){

  //     if (db){
  //       var collection = db.collection(this.collectionName);
        
  //       console.log("The index is:  " + id)     
  //       collection.updateOne({ _id:ObjectID(id) }, { $set: newData } );
  //       collection.find().toArray(function(err, docs){
  //         onQueryFinished(docs);
  //       })
  //     }
  //   }.bind(this))
  // }




}


module.exports = TripsQuery