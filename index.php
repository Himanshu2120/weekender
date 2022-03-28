<!DOCTYPE html>
<html>
	<head>
		<title>weekender Project</title>
		<link rel="stylesheet" href="weekender.css" type="text/css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script type="text/javascript" src="weekender.js"></script>
	</head>
	<body>
		<div class="container">
			<input class='keyup_event black' type="text" placeholder='MM' maxlength="2" id='month'>
			<input class='keyup_event black' type="text" placeholder='DD'  maxlength="2" id='date'>
			<input class='keyup_event black' type="text"  placeholder='YYYY' maxlength="4" id='year'>
			<button id='dob_enter' type="submit">Enter</button>
		</div>

		<div id="countdown_work"></div>
		<div id="countdown_weekend"></div>
	</body>
</html>
