$(document).ready(() => {
	//
	$('.buttonEatBurger1').on('click', (event) => {
		let id = event.target.dataset.id;
		let eat = event.target.dataset.eat;
		//sending put request to the back end to update the burger to be eaten.
		let burgerEaten = {
			eaten: eat
		};

		$.ajax('/api/burger/eat' + id, {
			type: 'PUT',
			data: burgerEaten
		}).then(() => {
			//reload the page to get the updated list from the database
			location.reload();
		});
	});

	//handles button click of Add Burger
	$('.addBurger').on('submit', (event) => {
		event.preventDefault();

		//create the new burger so it can be passed to the burger app
		const newBurger = $('#newBurger').val().trim();

		//send the post request to the API route, the route is defined in the burger controller
		$.post('/api/burger/create', { name: newBurger }).then(() => {
			//reload the page to get the updated list from the database
			location.reload();
		});
	});

	//handles button that deletes burgers on click
	$('.deleteBurger').on('click', (event) => {
		let id = event.target.dataset.id;
		console.log('clicked');
		$.ajax('/api/burger/delete' + id, {
			type: 'DELETE'
		}).then(() => {
			console.log('reload me');
			location.reload();
		});
	});
});
