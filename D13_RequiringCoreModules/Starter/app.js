var util = require('util'); 

var name = 'Dan';
var greeting = util.format('Hello, %s', name);
util.log(greeting);