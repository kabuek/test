$(".nav__link").on("click", function (e) {
	e.preventDefault();
	$(".nav__link").removeClass("active");
	$(this).addClass("active");
})

$(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', +(scrolled * 0.2) + 'px');
});