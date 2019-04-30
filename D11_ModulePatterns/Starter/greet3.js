function Greeter() {
  this.greeting = "Hello world 3";
  this.greet = function() {
    console.log(this.greeting);
  };
}

// below we have exports be a new object Greeter
module.exports = new Greeter();