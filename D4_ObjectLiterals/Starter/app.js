//we made an object and assigned a method to it, we then invoked the method using dot notation, the alternative way to call a property is below

var person = {
  firstname: 'John',
  lastname: 'Rogers',
  greet: function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
  }
}

person.greet();

console.log(person['firstname']);