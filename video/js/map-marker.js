var coords = [
    [59.943401, 30.338527],[59.95649, 30.302135],[59.942712, 30.297329]
],
    myCollection = new ymaps.GeoObjectCollection({}, {
       preset: 'twirl#redIcon', //все метки цвета
//       draggable: true // и их можно перемещать
    });
// или myCollection = new ymaps.GeoObjectArray(...);

for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
}

myMap.geoObjects.add(myCollection);

// При клике на карту все метки будут удалены.
myCollection.getMap().events.add('click', function() {
    myCollection.removeAll();
});






//
//var myPlacemark = new ymaps.Placemark([59.943401, 30.338527], {}, {
//        iconImageHref: '../images/map-point.png',
//        iconImageSize: [30, 42],
//        iconImageOffset: [-3, -42]
//    });
//


//
//
//
//myPlacemark0 = new ymaps.Placemark([59.943401,30.338527], { // Создаем метку с такими координатами и суем в переменную
//        balloonContent: 'Заголовок метки 1Немного инфы о том, о сем. Лорем ипсум чото там.' // сдесь содержимое балуна в формате html, все стили в css
//	}, {
//	iconImageHref: '../images/sale20.png', // картинка иконки
//	iconImageSize: [64, 64], // размер иконки
//	iconImageOffset: [-32, -64], // позиция иконки
//	balloonContentSize: [270, 99], // размер нашего кастомного балуна в пикселях
//	balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
//	balloonImageHref: '../images/map-point.png', // Картинка заднего фона балуна
//	balloonImageOffset: [-65, -89], // смещание балуна, надо подогнать под стрелочку
//	balloonImageSize: [260, 89], // размер картинки-бэкграунда балуна
//	balloonShadow: false
//});
///* Добавляем метки на карту */
//myMap.geoObjects
//	.add(myPlacemark0);