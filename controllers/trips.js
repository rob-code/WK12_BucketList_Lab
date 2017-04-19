var express = require('express');
var app = express();
var tripsRouter = express.Router();
var TripsQuery = require('../db/trips_query')
var tripsQuery = new TripsQuery('trips')


//INDEX
tripsRouter.get('/', function(req, res){
  tripsQuery.all(function(docs){
    res.json(docs)
  })
})

//SHOW TRIP BY ID
tripsRouter.get('/:id', function(req,res){
  tripsQuery.all(function(docs){
    res.json(docs[req.params.id])
  })
})

//TRIP UPDATE BY ID
tripsRouter.put('/:id', function(req,res){
  
  console.log("req.params.id : " + req.params.id)
  console.log("this is the countryname body " + req.body) // is what would come from a form
  tripsQuery.update(req.params.id, req.body, function(docs){
    res.json(docs);
  })
})



//CREATE NEW TRIP

//DELETE TRIP BY ID 

module.exports = tripsRouter