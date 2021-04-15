//функция для подключения webp
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

//==================================

window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu__items'), //класс, к которому добавится доп класс(1)
	burger = document.querySelector('.burger'); //класс куда тыкаем (2)

	burger.addEventListener('click', () => {
		 burger.classList.toggle('burger_active'); //класс куда тыкаем и что к нему добавиться через пробел (2)
		 menu.classList.toggle('menu__items_active');  //тот самый класс, который добавился(1)
	});

	menuItem.forEach(item => {
		 item.addEventListener('click', () => {
			  burger.classList.toggle('.burger_active'); //класс куда тыкаем и что к нему добавиться через пробел
			  menu.classList.toggle('.menu__items_active');//тот самый класс, который добавился(1)
		 })
	})
})