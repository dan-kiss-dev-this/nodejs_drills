//wrap function expressionin parenthesis to invoke it, sorta like 'quotes', the iife-immediatly invoked function expression runs as soon as it is created. the paranthesis around it is called a grouped operator and it makes it get invoked immediatly, it also keeps the variables of the iife from polluting the global scope as those varibles only are accessible by the iife itself. note how 'Doe' is passed in for the last name

var firstname = 'Jane';
(function(lastname) {
  var firstname = 'John';
  console.log(firstname);
  console.log(lastname);
}('Doe'));

console.log(firstname)

//note you can use functions on primatives right away
console.log('hey'.length)