var fs = require('fs');

// readable is the readStream object we create from fs.createReadStream() below note the 32*1024 is 32 kilobytes as 1 kilo is 1024 bytes
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16*1024});

var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// we use the .on() eventEmitter that is inheritied, the name of an event caused by data is 'data' which we write below as seen in the documentation. 
readable.on('data', function(chunk) {
	// the .length is how many bytes the data is, data buffer default is 64KB-kilobytes which is 64*1024 bytes.
	console.log(chunk.length);
	writeable.write(chunk);
});

