$(document).ready(function(){

	//Define the function
	function enterCity(){

		//Prevent form submission
		event.preventDefault();

		//Define the variables
		var nyc = "";
		var sf = "";
		var la = "";
		var atx = "";
		var syd = "";		
		var city = $('#city-type').val(); //Get user value

		if (city == "nyc" || city == "New York" || city == "New York City"){

			//$('body').css('background-image', 'url(images/winter.jpg)');
			$('body').css('background-color', 'yellow');

		}else{

			$('body').css('background-color', 'red');

		}

		
	};

	//Calls the actions
	$('#submit-btn').submit('enterCity');

});