'use strict';

class Person {
  // constructor is used to pass initial values in
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  // in es5 the below is Person.prototype.greet = function() {}
  greet() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
  }
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('jane', 'doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(jane.__proto__ === jane.__proto__);