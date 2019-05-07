var express = require('express');
var app = express();
require('dotenv').config();

var user = process.env.DB_USER;
var pass = process.env.DB_PASS;
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://'+user+':'+pass+'@cluster0-ygfoe.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

var Schema = mongoose.Schema;

// schema stores js object of name and type
var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
  firstname: 'John3',
  lastname: 'Doe',
  address: '555 Main St.'
});

// save the user
john.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(port);
