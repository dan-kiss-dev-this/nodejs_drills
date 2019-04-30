function Greeter() {
  this.greeting = "Hello world 4";
  this.greet = function() {
    console.log(this.greeting);
  };
}

// below we have exports be the function Greeter so instead of creating the new object, this function can be used to create new objects
module.exports = Greeter;