// object properties and methods

var obj = {
  greet: 'hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet'
console.log(obj[prop]);

var arr = [];

arr.push(function() {
  console.log('Hello World 1')
});
arr.push(function() {
  console.log('Hello World 2')
});
arr.push(function() {
  console.log('Hello World 3')
});

// you can put functions into arrays and invoke them as wanted
arr.forEach(function(element) {
  element();
});