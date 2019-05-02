// fs is filesystem goes to c++ to deal with files in node
var fs = require('fs');

// note __dirname is passed when code is wrapped in function in node
// in node fs.js core the fs.readSync = function(fd, buffer, offset, length, position) {} note the contents of the file is loaded into the buffer as the buffer can deal with binary data and then uses encoding to get the string back. 
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8' );

// to make greet the file was read off the hard drive, had chunks of binary data sent to the buffer when was encoded to give back the string.
console.log(greet);

// error first callback, callback that takes error object as first parameter, if there is no error the error object will be null, if there is an error you get an object defining the error. this is a standard node pattern of putting the error first. 
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
  //note the data that comes back is a buffer if you dont specify utf8 above
  console.log(data)
})

// note the done below happens before the asnyc readFile above
console.log('Done!')