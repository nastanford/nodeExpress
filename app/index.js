// Express Webserver Example
var express = require("express");
var app = express();
var port = 3000;

app.get('/',function(req,res){
  res.send('<h1>Stanford Meetups</h1>');
});

var server = app.listen(port,function() {
  console.log(`Express Webserver started go to http://localhost:${port}`);
});

/* Node JS Web Server with Express
var http = require('http');
var port = 3000;

var myServer = http.createServer(function(request, response)
{
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write('<h1>Nathan\' Meetups</h1>');
  response.end();
});

myServer.listen(port);
console.log(`Webserver started http://localhost:${port}`);
*/