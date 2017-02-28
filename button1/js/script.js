$(document).ready(function(){
	console.log("hello there!");

	$(".eye").on("mouseenter", function () {
		$(this).addClass("hover");
	});

	$(".eye").on("mouseleave", function (){
		$(this).removeClass("hover");
	})

	$(".eye").on("click", function () {
		$(this).toggleClass("active");
		$("body").toggleClass("dark");
	})

});