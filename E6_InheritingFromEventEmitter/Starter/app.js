var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  this.greeting = 'Hello world';
}

// we are adding Greetr as well as the prototype property of events module
//what we do is Greet.prototype has a prototype that points to EventEmitter.prototype
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  // this.emit uses EventEmitter above as Greetr does not have it
  //using emit we have the greet event occur which makes the .on('greet',func()) fire
  //we can pass data to the emit this data will be sent to each of listeners
  this.emit('greet', data);
}

// greeter1 points to Greetr prototype which also points to the EventEmitter prototype
var greeter1 = new Greetr();
greeter1.on('greet', function(data) {
  console.log('Someone greeted! ' + data);
});

greeter1.greet('Tony')