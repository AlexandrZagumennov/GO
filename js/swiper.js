const swiper = new Swiper('.swiper', {
	speed: 800,
	loop: true,
	centeredSlides: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
});