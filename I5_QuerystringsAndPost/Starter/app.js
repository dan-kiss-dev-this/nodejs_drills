var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

// this creates application/x-www-form-urlencoded parser using the bodyParser import from above, are urlencodedParser will be passed as a callback to the POST statement.
// POST /login gets urlencoded bodies, see sample code below
// app.post('/login', urlencodedParser, function (req, res) {
//   res.send('welcome, ' + req.body.username)
// }) 
var urlencodedParser = bodyParser.urlencoded({ extended: false});

// to create application/json parser
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	// Qstr means querystring
	// pass it using http://localhost:3000/person/1?qstr=123
	// this generated an http request that included the querystring in the header and it was parsed an made availble to me in in Express using the 
	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

app.post('/person', urlencodedParser, function(req, res) {
	// the urlencodedParser is run as a function when a post is made to /person 
	res.send('Thank you for posting');
	// now req.body will be added by the urlencodedParser middleware
	console.log(38, urlencodedParser);
	console.log(req.body);
	//say we post a firstname and lastname
	// to collect the input we will modify the index.ejs html page, we need the proper xml and url encoded post with that sequence of strings and values in the body of the http request 
	console.log(req.body.firstname);
	console.log(req.body.lastname);
})

// we will recieve some JSON data from personjson
app.post('/personjson', jsonParser, function(req,res) {
	res.send('Thank you for the JSON data');
	console.log(req.body);
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);