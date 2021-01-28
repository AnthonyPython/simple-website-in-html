// create the back to top button
$('body').prepend('<div class="leftbar-wrap"><a href="#" class="left-scrollbutton">Up</a></div>');

var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('.leftbar-wrap').fadeIn('slow');
	} else {
		$('.leftbar-wrap').fadeOut('slow');
	}
});

$('.leftbar-wrap').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});