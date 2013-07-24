var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var buffer = new Buffer(27);
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  buffer = data;
});

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
