/* setInterval */
$(document).ready(function () {
	console.log('Hello');
	var eyeCount = 0;
	setInterval(function () {
		$('#eye-'+eyeCount).addClass('show');
		setTimeout(function () {
			$('.special').removeClass('show');
		}, 2000);2
		eyeCount = eyeCount + 1;
	},4000);


});