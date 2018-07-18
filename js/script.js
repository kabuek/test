$(".nav__link").on("click", function (e) {
	e.preventDefault();
	$(".nav__link").removeClass("active");
	$(this).addClass("active");
})

$(window).on("scroll", function(){
    var scrolled = $(window).scrollTop();
    if ($('header').scrollTop() >= 10) {
    $('.bg').css('top', +(scrolled * 0.1) + 'px'); }
});