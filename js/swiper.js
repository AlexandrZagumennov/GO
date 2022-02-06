const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 900,
    spaceBetween: 70,
    centeredSlides: true,
	initialSlide: 0,
    slideToClickedSlide: true,
    toggle: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});