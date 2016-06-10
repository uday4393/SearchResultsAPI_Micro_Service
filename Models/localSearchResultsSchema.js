var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var localSearchResultsSchema = mongoose.Schema({
	filters :
  {
    label : String,
    id : String,
    type: String,
    options :
    {
      floor : Number,
      ceil : Number,
      step : Number,
      noSwitching : Boolean,
      endPointsTranslate :
      {
        prefix : String,
        postfix : String
      },
      leftSliderHandleTranslate :
      {
        prefix : String,
        postfix : String
      },
      rightSliderHandleTranslate :
      {
        prefix : String,
        postfix : String
      }
    }
  },
  localResult :
  {
    localNo : String,
    Name : String,
    departure_time : Date,
    arrival_time : Date,
    duration : Date,
    Availability : String,
    price : String,
    departure_station : String,
    arrival_station : String
  }
});

localSearchResultsSchema.statics.getResults = function(cb){
  this.find({},cb);
}

module.exports = localSearchResultsSchema;
