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
tripsRouter.post('/', function(req, res){

console.log("Hello" + req.body)

var newTrip = {
    country: req.body.country,
    visitByDate: req.body.visitByDate,
    places: [
      {location: req.body.location,
      landmarks: [req.body.landmarks],
      lat: req.body.lat,
      lng: req.body.lng}
    ]
  }

  tripsQuery.add(newTrip, function(docs){
    res.json(docs)
  })

})

//DELETE TRIP BY ID 
tripsRouter.delete('/:id', function(req,res){
  
  console.log(req.params.id)

  tripsQuery.delete(req.params.id, function(docs){
    res.json(docs);
  })
  })



module.exports = tripsRouter