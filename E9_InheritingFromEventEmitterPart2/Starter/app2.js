var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
  // below we overwrite the this keyword, also called supercontructor on other languages, this references the this of function person, this drives inheritence
	Person.call(this);
	this.badgenumber = '1234';
}

// Policeman should inherit from person below
util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();