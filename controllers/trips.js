var express = require('express');
var app = express();
var tripsRouter = express.Router();
var TripsQuery = require('../db/trips_query')
var tripsQuery = new TripsQuery('trips')


//SHOW ALL
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

//UPDATE TRIP BY ID
tripsRouter.put('/:id', function(req,res){
  tripsQuery.update(req.params.id, req.body, function(docs){
    res.json(docs);
  })
})

//CREATE NEW TRIP
tripsRouter.post('/', function(req, res){

    tripsQuery.add(req.body, function(docs){
      res.json(docs)
    })

  })

//DELETE TRIP BY ID 
tripsRouter.delete('/:id', function(req,res){
  
  tripsQuery.delete(req.params.id, function(docs){
    res.json(docs);
  })
})

module.exports = tripsRouter