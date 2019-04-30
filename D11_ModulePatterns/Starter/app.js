var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet; //we need .greet to get a property on the object which will be the function we set up
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'change hello world 3';

// note greet3b is the same object as greet3, modules in node are cached!
var greet3b = require('./greet3')
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();