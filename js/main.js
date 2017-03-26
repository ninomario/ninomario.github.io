function askQuestions () {

	//asking for their first name
	var firstName = prompt ('what is your first name?');
	var lastName = prompt ('what is your last name?');
	//combine names
	var fullName = firstName + ' ' + lastName

	//helps to spit it into console so we can check
	console.log(fullName);

	var age;
	var lastName
	var firstName

	function getAge() {
		//ask for age
		age = prompt ('How old are you? Please use a number');
		age = parseInt (age);
		if (isNaN(age)) {
			getAge();
		}
	}

	getAge();

	console.log(age);

	if (age >= 18) {
			
			console.log('User is an adult');

	} else if (age >= 13) {

			console.log('User is a Teenager');
	} else if (age < 13) {

			console.log('User is a Child');

	}

	if (firstName.toLowerCase() === "general" && lastName.toLowerCase() !== "assembly") {

		console.log('Greetings General')
	}

	// FINDING OUT FAVOURITE COLOUR -- LOWER CASE
	var faveColour = prompt('what is your favourite colour?').toLowerCase().trim();

	if (faveColour === 'red' ||
		faveColour === 'green' ||
		faveColour === 'blue' ||
		faveColour === 'yellow') {

		$('h1').css('color', faveColour);


	}
}


//when the page  has loaded
$(function()    {

		//ONLY RUN QUESTIONS WHEN CLICKING ON SPACE
		$('img').on('click',askQuestions);

		//When the user click on h3
		$('h3').on('click', function() {

			//Toggle the next element
			$(this).next().slideToggle();



		})

})
