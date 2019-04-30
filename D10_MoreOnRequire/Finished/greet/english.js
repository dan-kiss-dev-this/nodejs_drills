var greetings = require('./greetings.json.js');

var greet = function() {
	console.log(greetings.en);
}

module.exports = greet;