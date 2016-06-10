var express = require('express');
var router = express.Router();
var http = require('http');
var sabreDevStudio = require('sabre-dev-studio');
var sabre_dev_studio = new sabreDevStudio({
  client_id:     'V1:w32g8ch9elohsd5y:DEVCENTER:EXT',
  client_secret: 'dxWRp97S',
  uri:           'https://api.test.sabre.com'
});
var options = {};
var callback = function(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(JSON.parse(data), null, 3));
  }
};
function sabreCall(q, res) {
  sabre_dev_studio.get(q, options, function(err, data) {
    response(res, err, data);
    // console.log(data);
  });
};

function response(res, err, data) {

  if (err) {
    res.status(200).send({
      'status': false,
      'message': 'Error',
      'info': err
    });
  } else {
    res.status(200).send({
      'status': true,
      'message': 'Success',
      'results': JSON.parse(data)
    });
  }
}

//TODO main service uri and response will be TP object
    // http.get(url,id).then(function(data){
      // for(component in data.components)
      // {
      //   if(component.type=="transit")
      //   {
      //     var flightData = component.ChildServices.flight;
      //   }
      //   if(component.type=="location")
      //   {
      //     var hotelData = component.ChildServices.stay;
      //   }

        // var origin = flightData.sourceAirport,
        //     destination = flightData.destinationAirport,
        //     startDate =flightData.travelStartDate,
        //     endDate = flightData.travelStartTime,
        //     maxfare = flightData.maxfare;
        var origin = 'DEL',
            destination = "BLR",
            startDate ="2016-06-10",
            endDate = "2016-06-12",
            maxfare = "12000";
            var uri ='/v1/shop/flights?origin='+origin+'&destination='+destination+'&departuredate='+formatDate(startDate)+'&returndate='+formatDate(endDate)+'&onlineitinerariesonly=N&limit=1&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=IN';

                      console.log(uri);
          router.get('/api/flights',function(req, res){
             sabreCall(uri,res);
                    //   .then(function(data) {
                    //   var searchResults = reformatResponse(data);
                    //   res.send(searchResults);
                    // })
                    // .error(function(err) {
                    //   console.log(err);
                    // });
          });
    // });

    // Helper function to format the date
 function formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }

      return [year, month, day].join('-');
}

//reformatter function to get results as required
  function reformatResponse(res){

    var jsonObj = {};
    var jsonData = [];

    // res.forEach(function(data){
      jsonObj["source"] = res.OriginLocation;
      jsonObj["destination"] = res.DestinationLocation;
      //To Construct the json Object acc to our req from the searchResults data
      jsonData.push(jsonObj);
    // });
    console.log(jsonData);
  }

module.exports = router;
