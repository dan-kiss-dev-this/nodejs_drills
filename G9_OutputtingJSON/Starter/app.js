var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json'});
  var obj = {
    firstname: 'John',
    lastname: 'Doe'
  };
  // below we serialize the obj object on the node side, note the browser can deserialize on its side so you can take the sent data and use it in js on the browser aka consume the api endpoint provided data
  res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');