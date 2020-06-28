//import the connection
const connection = require('./dbConnection');

//selects all the burgers from the database
const selectAll = (table) => {
	//query string that executes the database
	const queryString = `SELECT * FROM ${table}`;
	return connection.query(queryString);
};

//inserts a burger to the database
const insertOne = (table, column, value) => {
	//query that inserts a burger into the database
	const queryString = `INSERT INTO ${table} (${column.toString()}) VALUES (?,?)`;
	return connection.query(queryString, [ value, false ]);
};

//updating a row in the database
const updateOne = (table, columnVal, id) => {
	//query that updates one row/burger entry in the database
	const queryString = `UPDATE ${table} SET devoured = ? WHERE ID = ? `;
	return connection.query(queryString, [ columnVal, id ]);
};

//delets a row from the database(ie burger)
const deleteOne = (table, id) => {
	//query that deletes a burger from the database
	const queryString = `DELETE FROM ${table} WHERE ID = ? `;
	return connection.query(queryString, [ id ]);
};

//created object relational mapper (orm)
const orm = {
	selectAll,
	insertOne,
	updateOne,
	deleteOne
};

module.exports = orm;
