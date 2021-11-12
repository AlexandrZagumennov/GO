// Аккордеон
$('.faq__list').accordion({
	active: true,
	collapsible: true,
	heightStyle: 'content',
	icons: {
		header: 'faq__item-icon',
		activeHeader: 'faq__item-icon faq__item-icon_active'
	}
});

// Яндекс - карта
ymaps.ready(init);
function init() {
	const myMap = new ymaps.Map("map", {
		center: [55.770355, 37.660332],
		zoom: 18
	});

	const mark = new ymaps.Placemark([55.770355, 37.660332], {
		hintContent: 'Game Over'
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'assets/location.png',
		iconImageSize: [50, 50],
		iconImageOffset: [-25, -50]
	});

	myMap.geoObjects.add(mark);

	myMap.behaviors.disable('scrollZoom'); // запрещаем зум карты колёсиком мыши
	myMap.behaviors.disable('drag'); // запрещаем скролл свайпом
	myMap.controls.remove('geolocationControl'); // удаляем геолокацию
	myMap.controls.remove('searchControl'); // удаляем поиск
	myMap.controls.remove('trafficControl'); // удаляем контроль трафика
	myMap.controls.remove('typeSelector'); // удаляем тип
	myMap.controls.remove('fullscreenControl'); // удаляем переход в полноэкранный режим
	myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
	myMap.controls.remove('rulerControl'); // удаляем контрол правил
};
