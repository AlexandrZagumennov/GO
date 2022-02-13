const scrollFunc = () => {
	const links = document.querySelectorAll('.navigation__item a');
	const linkArrowDown= document.querySelector('.banner__arrow-down');
	const newArray = [...links, linkArrowDown];

	seamless.polyfill();

	newArray.forEach( element => {
		element.addEventListener('click', event => {
			event.preventDefault();

			const id = element.getAttribute('href').substring(1);
			const section = document.getElementById(id);

			if (section) {
				seamless.elementScrollIntoView(section, {
					behavior: 'smooth',
					block: 'start'
				})
			} 
		})
	});
}

scrollFunc();