var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
  console.log('Somewhere, someone said hello');
});

emtr.on('greet', function() {
  console.log('A greeting occurred!');
});

emtr.on('bye', function() {
  console.log('goodbye and have a beatiful time')
})

console.log('Hello!');
emtr.emit('greet');


emtr.emit('bye');