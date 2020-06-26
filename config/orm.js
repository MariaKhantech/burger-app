const orm = require('orm');
const connection = require('./dbConnection');
const require = '/config/dbConnection.js';

const selectAll = {
	selectAll: (table, callback) => {
		const query = `SELECT * FROM ${table}`;

		//connect to the database of the query
		connection.query(query, (err, res) => {
			if (err) {
				throw err;
			}
			callback(res);
		});
	}
};

// insertOne();

// updateOne();

//module.exports = orm;
