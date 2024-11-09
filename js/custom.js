function hideInactiveImages(swiper, isDesktop) {
	const activeIndex = swiper.activeIndex;
	const images = swiper.el.querySelectorAll('.swiper-image');
	images.forEach((img, index) => {
		if (!isDesktop || index === activeIndex) {
			img.style.display = 'block';
		} else {
			img.style.display = 'none';
		}
	});
}

function touchCapable() {
	return (
		'ontouchstart' in window ||
		(window.DocumentTouch && document instanceof window.DocumentTouch) ||
		navigator.maxTouchPoints > 0 ||
		window.navigator.msMaxTouchPoints > 0
	);
};
jQuery('.welcome-banner-wrap').each(function () {
	const wrap = jQuery(this);
	const slider = wrap.find('.slider-banner');
	const slides = wrap.find('.swiper-slide');
	const container = wrap.children('.container');

	if (slides.length > 1) {
		let isDesktop = document.documentElement.clientWidth >= 768;
		let args = {
			loop: true,
			slidesPerView: 'auto',
			spaceBetween: 5,
			direction: 'horizontal',
			grabCursor: true,
			resistanceRatio: 0,
			allowTouchMove: true,
			allowSlideNext: true,
			allowSlidePrev: true,
			touch: true,
			simulateTouch: !touchCapable(),
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			on: {
				init: function (swiper) {
					hideInactiveImages(swiper, isDesktop);
				},
				slideChange: function (swiper) {
					hideInactiveImages(swiper, isDesktop);
				},
			},
		};

		if (isDesktop) {
			args.effect = 'fade';
			args.speed = 250;
		} else {
			args.effect = 'slide';
			args.speed = 450;
		}

		new Swiper(slider[0], args);
	}
});