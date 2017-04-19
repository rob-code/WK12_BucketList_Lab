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

//CREATE NEW TRIP

//DELETE TRIP BY ID 

module.exports = tripsRouter