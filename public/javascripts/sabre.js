var express = require('express');
var router = express.Router();
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
    console.log(data);
  });
}

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
      'info': data
    });
  }
}

  router.get('/api/v1/cities', function(req,res) {
    sabreCall('/v1/lists/supported/cities', res);
  });

  router.get('/api/v1/flights', function(req,res) {
    sabreCall('/v1/shop/flights?origin=BLR&destination=DEL&departuredate=2016-06-10&returndate=2016-06-12', res);
  });

module.exports = router;
