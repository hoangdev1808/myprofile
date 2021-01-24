/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// function scrollActive() {

// }
/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
	let headerHeight = $("header").outerHeight();
	let bannerHeight = $("#section-banner").outerHeight();
	$(window).scroll(function () {
		if ($(this).scrollTop() > headerHeight) {
			$("#scroll-top").addClass("show-scroll");
		} else {
			$("#scroll-top").removeClass("show-scroll");
		}
	});

	$("#scroll-top").on("click", function (e) {
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0,
		});
	});
}

/*==================== MAIN MENU MOBILE ====================*/
function mainMenu() {
	$("header .navbar")
		.find(".btn-toggle")
		.on("click", function () {
			$(this).toggleClass("active");
			$("header .navbar .navbar-menu").find("ul").toggleClass("active");
			$("#overlay").toggleClass("active");
		});
}

/*==========LISTBANNER SLIDER==========*/
function listBanner() {
	var myswiper = new Swiper(".home-banner .swiper-container", {
		loop: false,
		speed: 2000,
		effect: "fade",
		grabCursor: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			nextEl: ".home-banner .swiper-button-next",
			prevEl: ".home-banner .swiper-button-prev",
		},
	});
}

/*==================== LOAD FUNCTION ====================*/
$(document).ready(function () {
	scrollTop();
	mainMenu();
	listBanner();
});
