
// Яндекс - карта
ymaps.ready(init);
function init() {
	const myMap = new ymaps.Map("map", {
		center: [55.723151, 37.565021],
		zoom: 17
	});

	const mark = new ymaps.Placemark([55.723151, 37.565021]);

	//const mark = new ymaps.Placemark([55.723151, 37.565021], {
	//	hintContent: 'Game Over'
	//}, {
	//	iconLayout: 'default#image',
	//	iconImageHref: '../img/contacts/map.png',
	//	iconImageSize: [50, 50],
	//	iconImageOffset: [-25, -50]
	//});

	myMap.geoObjects.add(mark);

	/*

	myMap.behaviors.disable('scrollZoom'); // запрещаем зум карты колёсиком мыши
	myMap.behaviors.disable('drag'); // запрещаем скролл свайпом
	myMap.controls.remove('geolocationControl'); // удаляем геолокацию
	myMap.controls.remove('searchControl'); // удаляем поиск
	myMap.controls.remove('trafficControl'); // удаляем контроль трафика
	myMap.controls.remove('typeSelector'); // удаляем тип
	myMap.controls.remove('fullscreenControl'); // удаляем переход в полноэкранный режим
	myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
	myMap.controls.remove('rulerControl'); // удаляем контрол правил
	*/
};
