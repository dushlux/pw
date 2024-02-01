$(window).scroll(function() {
	var height = $(window).scrollTop();
	if(height > 80){
		$('header').addClass('scroll');
	} else{
		$('header').removeClass('scroll');
	}
});
