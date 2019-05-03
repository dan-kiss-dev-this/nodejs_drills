var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // Note fs.readFileSync returns a string called html we pass to .end()
  var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
  // res.end([data][,encoding][,callback]) in node docs the data can be a string or buffer, if data is specific like below it is similiar to calling response.write(data, encoding) followed by response.end(callback) we explicity say the encoding is utf8 to make html into a string, as response is a stream so its dealing with binary data as a buffer object but we are manipulating the data before sending it and want to send the data as a string. It is easier to deal with a string then an array of binary data.
  var message = 'Hello world...';
  // .replace() is a method you can call on a string
  html = html.replace('{Message}', message);
  // html is a dynamic template where we changed data before sending it back
  res.end(html);

}).listen(1337, '127.0.0.1');
