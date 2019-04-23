function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

var john = new Person('John', 'Smith');
console.log(john.firstname);

// we add methods to all function from this method
Person.prototype.greet = function() {
  console.log('Hello ' + this.firstname)
};

john.greet();

//prototype is about giving object access to projects and properties
console.log(john.__proto__);