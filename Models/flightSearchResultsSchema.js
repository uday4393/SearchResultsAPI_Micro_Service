var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var flightSearchResultsSchema = mongoose.Schema({
  source:String,
  destination: String,
	sourceDetails:
  {
    date:Date,
    source:String,
    country: String
  },
	destinationDetails:
  {
    date:Date,
    source:String,
    country: String
  },
	mealsInformation:
  {
    displayName: String,
    information: String
  },
	baggageInformation:
  {
    displayName: String,
    information: String
  },
	name:String,
	imagePath: String,
	arrivalTime: Date,
	departureTime: Date,
	duration: Date,
	price: Number,
	stops:Number,
	fareType:String
});

flightSearchResultsSchema.statics.getResults = function(cb){
  this.find({},cb);
}

module.exports = flightSearchResultsSchema;
