function Emitter() {
  this.events = {
  };
}

Emitter.prototype.on = function(type, listener) {
  // prop: [] made below for events above this.events = {
  //   prop: [] 
  // };
  // we create a new property on the object, make sure its an array and add functions into the array
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
  if (this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
}

module.exports = Emitter;