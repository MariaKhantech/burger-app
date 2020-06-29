const express = require('express');
const router = express.Router();

//imports the burger.js to use the database functions
const burger = require('../models/burger');

//GET request that selects all the burgers from the database
router.get('/', (req, res) => {
	burger.selectAll().then((data) => {
		const hbsObject = {
			burgers: data
		};
		//renders the list of burgers to the index handle bar view
		res.render('index', hbsObject);
	});
});

//POST inserts a new burger into the database
router.post('/api/burger/create', (req, res) => {
	burger.insertOne([ 'burger_name', 'devoured' ], req.body.name).then((data) => {
		//directs the server to go fetch the latest burgers by redirecting it to do the GET again
		res.redirect('/');
	});
});

//route to update burger
router.put('/api/burger/eat:id', (req, res) => {
	burger.updateOne(req.body.eaten, req.params.id).then((data) => {
		if (data.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

//route to delete the burger
router.delete('/api/burger/delete:id', (req, res) => {
	console.log('making it');
	burger.deleteOne(req.params.id).then((data) => {
		if (data.affectedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;
