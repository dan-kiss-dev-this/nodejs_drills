exports = function() {
  console.log('Hello');
}

console.log(exports);
console.log(module.exports); //module.exports is passed to exports so at that point they point to the same memory location