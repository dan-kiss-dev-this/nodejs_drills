var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

// readable is source and writeable is destination
readable.pipe(writable);

// gzip is readable so it also has a .pipe method, we take a readable pipe it to gzip and take that compressed output and sends compressed output to  greet.txt.gz
//this is an example of method chaning, what happens is the method returns an object so we can keep calling methods
readable.pipe(gzip).pipe(compressed);