var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
require('dotenv').config();
var app = express();
var Twitter = require('twitter');

// app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(bodyParser.json());

// put API routes here, before the catch all route
var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });

app.get('/api/statuses', function(req, res){
  console.log("we hit api use");
  var params = {
                count: 10
                };
  client.get('statuses/home_timeline', params, function(error, tweets, response){
    if(error) {
      console.log(error);
    }
    //accounts for "null" & "undefined"
    res.json(tweets);
  });
});
var port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});