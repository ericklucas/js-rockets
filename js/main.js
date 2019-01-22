var timer = null;
var countdownNumber = 5;

var changeState = function (state) {
	// body...
	document.body.className = 'body-state' + state;
	countdownNumber = 5;
	document.getElementById('countdown').innerHTML = countdownNumber;

	clearInterval(timer);

	if (state == 2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber - 1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			
			if (countdownNumber <= 0) {
				changeState(3);
			}
		}, 500);	
	}else if (state == 3) {
		var sucess = setTimeout(function ()
		{
			var randomNumber = Math.round(Math.random()*10);
			
			console.log(randomNumber);
			// sucess
			if (randomNumber > 5 ) {
				changeState(4);
			}else{
			// failure
				changeState(5);
			}
		}, 2000);
	}
}

