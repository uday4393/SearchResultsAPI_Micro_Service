var express = require('express');
var http = require('http');
//TODO main service uri and response will be TP object
    http.get(url,id).then(function(data){
      for(component in data.components)
      {
        if(component.type=="transit")
        {
          var flightData = component.ChildServices.flight;
        }
        if(component.type=="location")
        {
          var hotelData = component.ChildServices.stay;
        }

        var origin = flightData.sourceAirport,
            destination = flightData.destinationAirport,
            startDate =flightData.travelStartDate,
            endDate = flightData.travelStartTime,
            maxfare = flightData.maxfare;

            $http.get('/api/v1/shop/flights?origin=' + origin +
                      '&destination=' + destination +
                      '&departuredate=' + formatDate(startDate) +
                      '&returndate=' + formatDate(endDate) +
                      'outboundstopduration=60'+
                      '&maxfare=' + maxfare+
                      '&limit=1&passengercount=4')
                      .success(function(data) {
                      // $scope.results = data;
                      // $scope.data = data.info;
                      //
                      // if ($scope.results.status) {
                      //   $scope.fareinfo = JSON.parse($scope.data).FareInfo;
                      //   console.log($scope.fareinfo);
                      //   $scope.showSimpleToast('Successfully got flight info');
                      // } else {
                      //   $scope.showSimpleToast('Error: ' +
                      //     JSON.parse($scope.data.data).message +
                      //     '. Try again!');
                      // }
                      var searchResults = data;

                    })
                    .error(function(err) {
                      // $scope.showSimpleToast('Error: ' +
                      //   JSON.parse(err.data).message +
                      //   '. Try again!');
                      console.log(err);
                    });
      }
    });

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
