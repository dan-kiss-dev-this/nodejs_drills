var express = require('express');
var app = express();
var mysql = require('mysql')

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	//note you need to set up mysql database
	var connection = mysql.createConnection({
		host: "localhost",
		user: "test",
		password: "test",
		database: "addressbook"
	});
	connection.query('SELECT People.ID, Firstname, Lastname, Address FROM People INNER JOIN PersonAddresses ON People.ID = PersonAddresses.PersonID INNER JOIN Addresses ON PersonAddresses.AddressID = Addresses.ID', function(err, rows){
		if (err) throw err;
		// the rows will be an array of objects
		console.log(rows);
	});

	next();
});

htmlController(app);

apiController(app);

app.listen(port);

// // I install as little as possible on my Mac so I use Docker for all my dev work. 

// # launch a docker container

// docker run -p 3306:3306 -d --name mysql -e MYSQL_ROOT_PASSWORD=password mysql/mysql-server

// # log into the docker container via its bash shell

// docker exec -it mysql bash

// # log into MySQL as root

// bash-4.2# mysql -uroot -ppassword

// # create and populate the database

// create database addressbook;

// use addressbook;

// create table addresses(
// ID INT NOT NULL AUTO_INCREMENT,
// Address VARCHAR(100) NOT NULL,
// PRIMARY KEY ( ID )
// );

// create table people(
// ID INT NOT NULL AUTO_INCREMENT,
// Firstname VARCHAR(100) NOT NULL,
// Lastname VARCHAR(100) NOT NULL,
// PRIMARY KEY ( ID )
// );

// create table personaddresses(
// PersonID INT NOT NULL,
// AddressID INT NOT NULL,
// PRIMARY KEY ( PersonID, AddressID )
// );

// insert into people (ID, Firstname, Lastname) Values (1, "Jane", "Doe"), (2, "John","Doe");
// insert into addresses (ID, Address) Values (1, "Street Av");
// insert into personaddresses (PersonID, AddressID) Values (1,1), (2,1);


// # now create a non root user
// # that we can log in from node with.
// # stackoverflow came to the rescue saving
// # us all from the dredded 
// # ER_NOT_SUPPORTED_AUTH_MODE and,
// # ER_HOST_NOT_PRIVILEGED errors 
// # with the mysql_native_password clause

// use mysql;
// DROP USER IF EXISTS node_test_user;
// DROP USER IF EXISTS node_test_user@localhost;
// CREATE USER node_test_user@localhost IDENTIFIED BY 'password';
// GRANT ALL PRIVILEGES ON *.* TO node_test_user@'localhost' WITH GRANT OPTION;
// CREATE USER 'node_test_user'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
// GRANT ALL PRIVILEGES ON *.* TO 'node_test_user'@'%' WITH GRANT OPTION;