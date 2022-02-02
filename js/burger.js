// Мобильное меню (бургер)
const body = document.querySelector('.page'),
	  burger = document.querySelector('.burger'),
	  headerNavigation = document.querySelector('.navigation__mobile-wrapper');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	headerNavigation.classList.toggle('active');
	body.classList.toggle('lock');
});

