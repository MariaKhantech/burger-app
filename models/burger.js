const orm = require('../config/orm');

const selectAll = () => {
	return orm.selectAll('burger');
};

const insertOne = (column, value) => {
	return orm.insertOne('burger', column, value);
};

const updateOne = (columnVal, id) => {
	return orm.updateOne('burger', columnVal, id);
};

const deleteOne = (id) => {
	console.log('string' + id);
	return orm.deleteOne('burger', id);
};

const burger = {
	selectAll,
	insertOne,
	updateOne,
	deleteOne
};

module.exports = burger;
