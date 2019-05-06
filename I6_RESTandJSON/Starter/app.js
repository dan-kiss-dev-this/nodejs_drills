var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
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
	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank you!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.get('/api/person/:id', function(req, res) {
	// get data from database in restful format
	res.json({ firstname: 'John', lastname: 'Doe' });
})

app.post('api/person/', jsonParser, function(req, res) {
	// post entry to data in restful api
});

app.delete('api/person/:id', function(req,res){
	//remove entry from database, this is restful format
});

app.put('api/person/:id', function(req, res) {
	// update a specific entry
})

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);