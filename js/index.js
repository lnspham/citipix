$(document).ready(function(){

	//Define the function
	function enterCity(){

		//Prevent form submission
		event.preventDefault();

		//Define the variables
		var nyc = ""; //New York
		var sf = ""; //San Franciso
		var la = ""; //Los Angeles
		var atx = ""; //Austin
		var syd = ""; //Sydney	
		var city = $('#city-type').val(); //Get user value

		if (city = "New York" || city = "nyc" || city = "New York City"){

			$('body').css('background-image', 'url(images/nyc.jpg)');

		}else if (city = "San Francisco" || city = "SF" || city = "Bay Area"){

			$('body').css('background-image', 'url(images/sf.jpg)');

		}else if (city = "Austin" || city = "ATX"){

			$('body').css('background-image', 'url(images/austin.jpg)');
		
		}else if (city = "Sydney" || city = "SYD"){

			$('body').css('background-image', 'url(images/sydney.jpg)');

		}else{

			$('body').css('background-image', 'url(images/citipix_skyline.jpg)');
		}

		
	};

	//Calls the actions
	$('#submit-btn').submit('enterCity');

});