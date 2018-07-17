$(".nav__link").on("click", function (e) {
	e.preventDefault();
	$(".nav__link").removeClass("active");
	$(this).addClass("active");
})