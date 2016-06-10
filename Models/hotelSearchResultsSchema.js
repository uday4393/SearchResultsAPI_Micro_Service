var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var hotelSearchResultsSchema = mongoose.Schema({
	name:String,
	location: String,
	rating: Date,
	amenities:
  {
      iconCode: String,
      name:String
  },
	price: Number,
  imageUrl : String
});

hotelSearchResultsSchema.statics.getResults = function(cb){
  this.find({},cb);
}

module.exports = hotelSearchResultsSchema;
