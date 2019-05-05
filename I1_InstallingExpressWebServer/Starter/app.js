var express = require('express');

//app has properties and methods on it we invoked it to make it work, the host is localhost:3000
var app = express();

// if process.env.PORT not defined then port is set to 3000, this is the express way to use certain ports automatically and have defaults as needed
var port = process.env.PORT || 3000;

// below we load the stylesheet and can request it below in app.get
app.use('/assets', express.static(__dirname + '/public'));

//we make out own middleware below
app.use('/', function(req, res, next){
  console.log('Request url: ' + req.url)
  // next means to run the next middleware, note the .get() is a middleware, note this middleware will run on any page you visit-why think its beucase they all start with / note if route note specified it is used always
  next();
})

// the req and res below is part of express which wraps the req, res of node and adds more functionality to be easier to work with
// get is http method GET, POST, DELETE, PUT
app.get('/', function(req, res) {
  //express takes care of content-type for you here
  res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>');
});

// url :page means page also same for:id can be anything
app.get('/person/:page/:id', function(req, res) {
  res.send('<html><head></head><body><h1>Page: ' + req.params.page +' Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
  res.json({ firstname: 'John', lastname: 'Doe'});
});

app.listen(port);
