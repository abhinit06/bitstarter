var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  console.log("Recieved a request");
  fbuffer = fs.readFileSync('index.html');
  resp = fbuffer.toString();
  response.send(resp);
//  response.send(fbuffer);
  response.end();
});

app.get('/contactus.html', function(request,response){
  console.log("Received a request for contact");
  fbuffer = fs.readFileSync('contactus.html');
  resp = fbuffer.toString();
  response.send(resp);
  response.end();
});

var port = process.env.PORT || 8888;
app.listen(port, function() {
  console.log("Listening on " + port);
});
