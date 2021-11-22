// Блокировка скролла
const disableScroll = () => {
	  const widthScroll = window.innerWidth - document.body.offsetWidth;

	document.body.dbScrollY = window.scrollY;

	document.body.style.cssText = `
		position: fixed;
		top: ${-window.scrollY}px;
		left: 0;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		padding-right: ${widthScroll}px;
	`
};

const enableScroll = () => {
	document.body.style.cssText = '';
	window.scroll({
		top: document.body.dbScrollY,
	})
}

// Модальное окно
const modalOpen = document.querySelector('.modal__open'),
	  modalOpenMobile = document.querySelector('.modal__open-mobile'),
	  modalOverlay = document.querySelector('.modal__overlay');

const runModalOpen = () => {
	  modalOverlay.classList.add('modal__overlay-open');
	  disableScroll();
};

const runModalClose = () => {
	  modalOverlay.classList.remove('modal__overlay-open');
	  enableScroll();
};

modalOpen.addEventListener('click', runModalOpen);
modalOpenMobile.addEventListener('click', runModalOpen);

modalOverlay.addEventListener('click', event => {
	target = event.target;

	if (target.matches('.modal__close') || target.matches('.modal__overlay')) {
		runModalClose();
	}
});

