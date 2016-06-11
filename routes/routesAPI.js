var express = require('express');
var mongoose=require('mongoose');
var router = express.Router();
var flightSearchResultsSchema= require('../Models/flightSearchResultsSchema');
var flightSearchResults= mongoose.model('flightSearchResults', flightSearchResultsSchema,'flightSearchResults');
var hotelSearchResultsSchema= require('../Models/hotelSearchResultsSchema');
var hotelSearchResults= mongoose.model('hotelSearchResults', hotelSearchResultsSchema,'hotelSearchResults');
var trainSearchResultsSchema= require('../Models/trainSearchResultsSchema');
var trainSearchResults= mongoose.model('trainSearchResults', trainSearchResultsSchema,'trainSearchResults');
var localSearchResultsSchema= require('../Models/localSearchResultsSchema');
var localSearchResults= mongoose.model('localSearchResults', localSearchResultsSchema,'localSearchResults');

router.get('/SearchResults/flight', function(req, res, next) {
flightSearchResults.getResults(function(err,data){
    console.log(err);
    console.log(data);
    res.json(data);
  });
});

router.get('/SearchResults/hotel', function(req, res, next) {
hotelSearchResults.getResults(function(err,data){
    console.log(err);
    console.log(data);
    res.json(data);
  });
});

router.get('/SearchResults/train', function(req, res, next) {
trainSearchResults.getResults(function(err,data){
    console.log(err);
    console.log(data);
    res.json(data);
  });
});

router.get('/SearchResults/local', function(req, res, next) {
localSearchResults.getResults(function(err,data){
    console.log(err);
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
