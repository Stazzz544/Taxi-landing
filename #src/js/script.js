@@include('swiper-bundle.min.js');
@@include('jquery-1.11.0.min.js');
@@include('jquery.tabs.js');
@@include('jquery.maskedinput.min.js');
@@include('wow.min.js');

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

new WOW().init();

//sidebar

window.addEventListener('DOMContentLoaded', () => {
	const sidebar = document.querySelector('.sidebar'), //класс, к которому добавится доп класс(1)
		sidebarActivator = document.querySelector('.close__menu'); //класс куда тыкаем (2)
	sidebarActivator2 = document.querySelector('.close__menu2'); //класс куда тыкаем (2)


	sidebarActivator.addEventListener('click', () => {
		sidebar.classList.toggle('sidebar_active');  //тот самый класс, который добавился(1)
	});

	sidebarActivator2.addEventListener('click', () => {
		sidebar.classList.remove('sidebar_active');  //тот самый класс, который убираем(1)
	})
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


$(document).ready(function(){
//appear arrow
//pageup
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.arrow-up').fadeIn();
		} else {
			$('.arrow-up').fadeOut();
		}
	});


//tabs

	$(function () {
		$('#horizontalTab').jqTabs({ direction: 'horizontal' });
	});


//modal

	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn('slow');
	}); 
	$('.modal__close').on('click', function(){
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});

	$('.catalog-item__btn').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	})

//validation

	$('input[name=phone]').mask("+7 (999) 999-99-99");

//php mailer

	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			 type: "POST",
			 url: "mailer/smart.php",
			 data: $(this).serialize()
		}).done(function() {
			 $(this).find("input").val("");
			 $('#consultation, #order').fadeOut();
			 $('.overlay, #thanks').fadeIn('slow');

			 $('form').trigger('reset');
		});
		return false;
  });
});