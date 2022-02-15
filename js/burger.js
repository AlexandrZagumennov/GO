const body = document.querySelector('.page'),
	  burger = document.querySelector('.burger'),
	  headerNavigation = document.querySelector('.navigation__mobile-wrapper');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	headerNavigation.classList.toggle('active');
	body.classList.toggle('lock');
});

headerNavigation.addEventListener('click', (event) => {
	const closeNav = event.target.closest('.navigation__link');

	if (closeNav) {
		headerNavigation.classList.remove('active');
		burger.classList.remove('active');
		body.classList.remove('lock');
	}
});