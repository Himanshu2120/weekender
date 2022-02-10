$( document ).ready(function() {

	// Run Input keyup event for the green color
	$('.keyup_event').keyup(function(e){
		var target = e.srcElement || e.target;
		var get_length = $(this).val();

		// Change input text color is lenght is matched
		if(get_length.length > 1)
		{	
			var sibling = target.nextElementSibling;
			if (sibling.tagName.toLowerCase() === "input")
			{
				sibling.focus();
			}
			$(this).addClass('green');
		}else{
			$(this).removeClass('green');
		}
		
		// Change text of enter button if user is glow or not
		if(get_length.length >= 1)
		{
			// To calculate age:
			var year_born = get_length;
			function getAge(birthYear){
				var currentDate = new Date();
				var currentYear = currentDate.getFullYear();
				age = currentYear - birthYear;
				return age;
			}
			calculatedAge = getAge(year_born);

			// Get all value of dob.
			var date_dob = $('#date').val();
			var month_dob = $('#month').val();
			var year_dob = $('#year').val();

			// Check if month, date & year are exist or not.
			if(month_dob.length == 2 && date_dob.length == 2 && year_dob.length == 4)
			{
				var user_dob = month_dob+'/'+date_dob+'/'+year_dob;
				var year = user_dob.match(/\/(\d{4})/)[1];

				// Check if year is valid or not
				if (year >= 1900 && month_dob <= 12)
				{
					if(calculatedAge > 19)
					{
						$('#dob_enter').removeClass('glow_no');
						$('#dob_enter').addClass('glow_yes');
					}else{
						$('#dob_enter').removeClass('glow_yes');
						$('#dob_enter').addClass('glow_no');
					}
				} else if(month_dob > 12)
				{
					alert(month_dob + ' is an invalid month !');
					$('#dob_enter').removeClass('glow_yes');
					$('#dob_enter').removeClass('glow_no');
				}else {
					alert(year + ' is an invalid year !');
					$('#dob_enter').removeClass('glow_yes');
					$('#dob_enter').removeClass('glow_no');
				}
			}else{
				$('#dob_enter').removeClass('glow_yes');
				$('#dob_enter').removeClass('glow_no');
			}
		}
	});

	// Get Current Date
	var curr;
	curr = new Date();

	// Get Coming Friday Date
	var fridayDate, coming_friday;
	fridayDate = new Date();
	fridayDate.setUTCHours(12,-30,0,0);
	coming_friday = 5 - curr.getDay();
	fridayDate.setDate(fridayDate.getDate()+coming_friday);

	// Weekend Days Counter
	var mondayDate, coming_monday;
	mondayDate = new Date();
	mondayDate.setUTCHours(4,-30,0,0);
	coming_monday = 2 + curr.getDay();
	mondayDate.setDate(mondayDate.getDate()+coming_monday);
	
	// Working Days Counter
	if(curr >= mondayDate)
	{
		var end = new Date(mondayDate);
	}else{
		var end = new Date(fridayDate);
	}

	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;
	function showRemaining()
	{
		var now = new Date();
		var distance = end - now;
		if (distance < 0)
		{
			clearInterval(timer);
			document.getElementById('countdown_work').innerHTML = 'EXPIRED!';
			return;
		}
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		document.getElementById('countdown_work').innerHTML = days + 'days ';
		document.getElementById('countdown_work').innerHTML += hours + 'hrs ';
		document.getElementById('countdown_work').innerHTML += minutes + 'mins ';
		document.getElementById('countdown_work').innerHTML += seconds + 'secs';
	}
	timer = setInterval(showRemaining, 1000);


	// // Weekend Days Counter
	// var mondayDate, coming_monday;
	// mondayDate = new Date();
	// mondayDate.setUTCHours(4,-30,0,0);
	// coming_monday = 2 + curr.getDay();
	// mondayDate.setDate(mondayDate.getDate()+coming_monday);
	// if(curr >= mondayDate)
	// {
	// 	// Working Days Counter
	// 	var weekend_end = new Date(mondayDate);
	// 	var weekend__second = 1000;
	// 	var weekend__minute = weekend__second * 60;
	// 	var weekend__hour = weekend__minute * 60;
	// 	var weekend__day = weekend__hour * 24;
	// 	var weekend_timer;
	// 	function showRemaining_weekend()
	// 	{
	// 		var now = new Date();
	// 		var distance = weekend_end - now;
	// 		if (distance < 0)
	// 		{
	// 			clearInterval(timer);
	// 			document.getElementById('countdown_weekend').innerHTML = 'EXPIRED!';
	// 			return;
	// 		}
	// 		var days = Math.floor(distance / weekend__day);
	// 		var hours = Math.floor((distance % weekend__day) / weekend__hour);
	// 		var minutes = Math.floor((distance % weekend__hour) / weekend__minute);
	// 		var seconds = Math.floor((distance % weekend__minute) / weekend__second);

	// 		document.getElementById('countdown_weekend').innerHTML = days + 'days ';
	// 		document.getElementById('countdown_weekend').innerHTML += hours + 'hrs ';
	// 		document.getElementById('countdown_weekend').innerHTML += minutes + 'mins ';
	// 		document.getElementById('countdown_weekend').innerHTML += seconds + 'secs';
	// 	}
	// 	weekend_timer = setInterval(showRemaining_weekend, 1000);
	// }
});


