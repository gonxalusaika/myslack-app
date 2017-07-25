var express = require('express');
var app = express();
var url = require('url');
var request = require('request');

var bodyParser = require('body-parser');
var scrabble = require('./scrabble.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 9001));

app.get('/', function(req, res){
  res.send('Running!!');
});

app.post('/scrabble', function(req, res){
  var query = req.body.text;

  var scrabbleText = scrabble(query);

  console.log(scrabbleText);

	var body = {
	  response_type: "in_channel",
	  text: scrabbleText
	};
  res.send(body);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
