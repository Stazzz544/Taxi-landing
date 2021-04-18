@@include('swiper-bundle.min.js');
@@include('jquery-1.12.4.min.js');
@@include('jquery.tabs.js');

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
})


window.addEventListener('DOMContentLoaded', () => {
	const sidebar = document.querySelector('.sidebar'), //класс, к которому добавится доп класс(1)
	sidebarActivator = document.querySelector('.close__menu'); //класс куда тыкаем (2)
	sidebarActivator2 = document.querySelector('.close__menu2'); //класс куда тыкаем (2)

	

	sidebarActivator2.addEventListener('click', () => {
		sidebarActivator2.classList.toggle('close__menu2'); //класс куда тыкаем и что к нему добавиться через пробел (2)

		 sidebar.classList.remove('sidebar_active');  //тот самый класс, который добавился(1)
	})

	sidebarActivator.addEventListener('click', () => {
		sidebarActivator.classList.toggle('close__menu'); //класс куда тыкаем и что к нему добавиться через пробел (2)

		 sidebar.classList.toggle('sidebar_active');  //тот самый класс, который добавился(1)
	});

})



var swiperMobile = new Swiper('.swiper-container-mobile', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	loop: true,
	slidesPerView: 'auto',
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	 },
	coverflowEffect: {
	  rotate: 50,
	  stretch: 0,
	  depth: 100,
	  modifier: 1,
	  slideShadows: true,
	},
	pagination: {
	  el: '.swiper-pagination',
	},
	
 });

 var swiperUppertunity = new Swiper('.swiper-container-uppertunity', {
	spaceBetween: 30,
	loop: true,
	centeredSlides: true,
	autoplay: {
	  delay: 2500,
	  disableOnInteraction: false,
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 });


 //tabs
 $(function () {
	$('#horizontalTab').jqTabs({direction: 'horizontal'});
});