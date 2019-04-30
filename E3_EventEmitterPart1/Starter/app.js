var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

// note on takes a string and function, emit just needs the string
emtr.on(eventConfig.GREET, function() {
  console.log('Somewhere, someone said hello');
});

emtr.on(eventConfig.GREET, function() {
  console.log('A greeting occurred!2');
});

emtr.on(eventConfig.BYE, function() {
  console.log('goodbye and have a beatiful time')
})

console.log('Hello!');
emtr.emit(eventConfig.GREET);


emtr.emit(eventConfig.BYE);