var person = {
  firstname: '',
  lastname: '',
  greet: function() {
    return this.firstname + ' ' + this.lastname;
  }
}

// Object.create() is a simple way to set up inheritence
// john had a prototype chain setup
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Smith';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Smith';

console.log(john.greet());
console.log(jane.greet());
