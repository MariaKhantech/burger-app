$(document).ready(() => {
	console.log('add burger app');
	//need a eaten button
	$('.buttonEatBurger1').on('click', (event) => {
		console.log('pacman');
	});

	//handles button click of Add Burger
	$('.addBurger').on('submit', (event) => {
		event.preventDefault();

		//create the new burger so it can be passed to the burger app
		const newBurger = $('#newBurger').val().trim();

		//send the post request to the API route, the route is defined in the burger controller
		$.post('/api/burger/create', { name: newBurger }).then(() => {
			console.log('new burger created');
			//reload the page to get the updated list from the database
			location.reload();
		});
	});
});
