// Мобильное меню (бургер)

const body = document.querySelector('.page'),
	  headerBurger = document.querySelector('.header__burger'),
	  headerNavigation = document.querySelector('.header__navigation');

headerBurger.addEventListener('click', () => {
	headerBurger.classList.toggle('active');
	headerNavigation.classList.toggle('active');
	body.classList.toggle('lock');
});

