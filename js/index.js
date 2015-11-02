$(document).ready(function(){

	//Define the function
	function enterCity(){

		//Prevent form submission
		event.preventDefault();

		//Define the variables
		var city = ""; 

		//Get user value
		$('#city-type').val();
	};

	//Calls the actions
	$('#submit-btn').submit('enterCity');

});