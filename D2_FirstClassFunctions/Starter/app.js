// Your Javascript Code Goes Here

/* eslint-disable strict */
// Your Javascript Code Goes Here

// function statement
function greet() {
  console.log('hi6');
}

greet();

// functions are first class so we can pass them around like variables

function logGreeting(fn) {
  fn();
};

logGreeting(greet);

// function expression
var greetMe = function() {
  console.log('hi there21');
};

greetMe();

logGreeting(greetMe);

// use a function expression on the fly, we pass in a function and invoke it!
logGreeting(function() {
  console.log('you passed a function to the funtion!');
});
