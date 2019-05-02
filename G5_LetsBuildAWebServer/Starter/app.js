var http = require('http');

// createServer() makes a new server object
// '127.0.0.1' is standard localhost address
// req.headers.user-agent
http.createServer(function(req, res) {
  console.log(req.headers)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world\n');

}).listen(1337, '127.0.0.1');