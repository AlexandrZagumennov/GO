ymaps.ready(init);
function init() {
	const myMap = new ymaps.Map("map", {
		center: [55.723151, 37.565021],
		zoom: 17
	});

	const mark = new ymaps.Placemark([55.723151, 37.565021]);

	myMap.geoObjects.add(mark);
};
