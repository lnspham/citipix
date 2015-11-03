$(document).ready(function(){

	//Define the function
	function enterCity(){

		//Prevent form submission
		event.preventDefault();

		//Define the variables

		/*Get user value & Remove extra spaces or 
		new lines that users or the browser might add before or after their input*/
		var city = $('#city-type').val().trim(); 

		var cityUpper = city.toUpperCase(); //Converting user inputs to uppercase


		//if and else condition for users input
		if (cityUpper == "NEW YORK" || cityUpper == "NYC" || cityUpper == "NEW YORK CITY"){

			$('body').css('background-image', 'url(images/nyc.jpg)');

		 }else if (cityUpper == "SAN FRANCISCO" || cityUpper == "SF" || cityUpper == "BAY AREA"){

		 	$('body').css('background-image', 'url(images/sf.jpg)');

		 }else if (cityUpper == "AUSTIN" || cityUpper == "ATX"){

		 	$('body').css('background-image', 'url(images/austin.jpg)');
		
		 }else if (cityUpper == "SYDNEY" || cityUpper == "SYD"){

		 	$('body').css('background-image', 'url(images/sydney.jpg)');

		 }else{

		 	$('body').css('background-image', 'url(images/citipix_skyline.jpg)');
		 }

		$('#city-type').val("");


		
	};

	//Calls the actions
	$('form').submit(enterCity);


});