const mysql = require('mysql');
const util = require('util');
let connection;

require('dotenv').config();

//heroku port and connecting to MySQL database
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: process.env.DB_HOST,
		port: process.env.DB_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME
	});
}
connection.connect(function(err) {
	if (err) throw err;
	console.log('db connected');
});

//this makes sure that queries are executed as a promise
connection.query = util.promisify(connection.query);
module.exports = connection;
