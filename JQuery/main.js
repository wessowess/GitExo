$(function(){
	// HTML construct
	$('body').append("<section></section>");
	$('section').append("<p>This a new paragraph...</p>");
	$('section p:first').after("<div></div>");
	$('section div:first').append("<h1>This is our first div</h1>");
	$('section div:first').append("<h2>Jews are people too</h2>");
	$('section').after("<div></div>");
	$('section div:nth-child(2)').append("<img src=\"cuteCatPicture.jpg\" alt=\"cute cat picture\">");
	$('section').append("<p>This a new paragraph...</p>");
	$('section').append("<p>This a new paragraph...</p>");

	// CSS construct
	$('*').css('box-sizing', 'border-box');
	$('body').css('font-size', '16px').css('margin', '0').css('padding', '0');
	$('section').css("width", "100%").css("text-align", "center");
	$('p').css("background-color", "black").css("color", "white");
	$('section div:first').css("background-color", "yellow");
	$('h1').css("color", "red");
});