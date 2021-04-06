/*==================== SHOW SCROLL TOP ====================*/
const scrollTop = () => {
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
const mainMenu = () => {
	$("header .navbar").find(".btn-toggle").on("click", function () {
		$(this).toggleClass("active");
		$("#overlay").toggleClass("active");
		$('header').find('.nav-left').toggleClass('active')
	});
	$("#overlay").on('click', function () {
		let $this = $(this);
		$this.removeClass('active');
		$('.btn-toggle').removeClass('active');
		$('header').find('.nav-left').removeClass('active')
	});
	$('.btn-toggle-search').on('click', function () {
		$(this).siblings('.search-box').slideToggle()
	})
}

/*==========LISTBANNER SLIDER==========*/
const listBanner = () => {
	let myswiper = new Swiper(".home-banner .swiper-container", {
		loop: false,
		speed: 2000,
		effect: "fade",
		grabCursor: true,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			nextEl: ".home-banner .swiper-button-next",
			prevEl: ".home-banner .swiper-button-prev",
		},
	});
}
// ===========================CHECK BANNER=========================//
const checkLayoutBanner = () => {
	const pagesBanner = $("#pagebanner");
	const heightHeader = $("header").outerHeight();
	const mainBanner = $("#home-banner");
	if (mainBanner.length >= 1) {
		$("main").css("padding-top", 0);
	} else if (pagesBanner.length >= 1) {
		$("main").css("padding-top", heightHeader);
	} else {
		$("main").css("padding-top", heightHeader);
	}
};

const initMapping = () => {
	$("header .navbar .nav-right .account-wrapper").mapping({
		mobileWrapper: "header .nav-top .wrapper-right",
		mobileMethod: "appendTo",
		desktopWrapper: "header .navbar .nav-right",
		desktopMethod: "appento",
		breakpoint: 991.98,
	});
}
/*==================== LOAD FUNCTION ====================*/
$(document).ready(function () {
	scrollTop();
	mainMenu();
	listBanner();
	initMapping();
	// checkLayoutBanner();
});
