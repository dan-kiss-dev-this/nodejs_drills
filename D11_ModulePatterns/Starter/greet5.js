var greeting = 'Hello World 5';

function greet() {
  console.log(greeting);
}

// reason we build like this to not expose greeting outside the module, this way you reveal only the functions that you want someone to use and the variables you don't want changed remain hidden/private. this is called the revealing module pattern

module.exports = {
  greet: greet
}