var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {  
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // every chunk of data read will be buffered and piped out to the http response steam, idea here is instead of pulling entire file into a buffer an then sending it, we will send it at a chunk at a time, so the buffer stays small and the application will be faster. note we can chain .pipe() here as it is interacting with a readable stream, the destination of the read data is response, response object is a writeable stream when it is done it becomes the output on the page.
    fs.createReadStream(__dirname +'/index.htm').pipe(res); 
    console.log(res) 
}).listen(1337, '127.0.0.1');