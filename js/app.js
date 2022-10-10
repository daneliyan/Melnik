$(document).ready(function () {

	$('.cat-inf').on('click', function () {
		$(this).toggleClass('active');
		$(this).next('.cart-bg').toggleClass('active');
	});

	// -------------------- video --------------------------
	const play = document.querySelector('.article__play');
	const video = document.querySelector('.article__video video');

	play.addEventListener('click', () => {
		video.play();
		video.setAttribute('controls', 'controls')
		play.classList.add('article__play--hidden');
	});

	// -------------------- header --------------------------

	$(window).scroll(function () {

		if ($(this).scrollTop() > 1) {
			$('header').addClass('sticky');

		}
		else {
			$('header').removeClass('sticky');

		}
	});

	
	//--------------- fancybox -----------
	$('[data-fancybox-popup]').fancybox({
		closeExisting: true,
		smallBtn: false,
		toolbar: false,
		autoFocus: false,
		hash: false,
		touch: false
	});
	

	// -------------------- svg--------------------------
	function svg() {
		$('img[src$=".svg"]').each(function () {
			var $img = $(this);
			var imgURL = $img.attr('src');
			var attributes = $img.prop('attributes');
			if ($img.hasClass('svg')) {
				$.get(imgURL, function (data) {
					var $svg = jQuery(data).find('svg');
					$svg = $svg.removeAttr('xmlns:a');
					$.each(attributes, function () {
						$svg.attr(this.name, this.value);
					});
					$img.removeClass('svg').replaceWith($svg);
				}, 'xml');
			}
		});
	}
	svg();	

	// ----------------- carousel ----------------------


	$('.gt').owlCarousel({
		loop: true,
		nav: false,
		navText: ['', ''],
		dots: true,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		items: 1
	});


	

	$('.mng').owlCarousel({
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1220: {
				items: 4,
			}
		}
	});


	$('.ctg').owlCarousel({
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1220: {
				items: 2,
			}
		}
	});


	$('.pts').owlCarousel({
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1220: {
				items: 4,
			}
		}
	});


	$('.crti').owlCarousel({
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1220: {
				items: 4,
			}
		}
	});

	

	// -------------------- Scroll -------------------------

	$(".srolls").on("click", "a", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();

		// получем идентификатор блока из атрибута href
		var id = $(this).attr('href'),

			// находим высоту, на которой расположен блок
			top = $(id).offset().top - 50;

		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({ scrollTop: top }, 800);
	});


	// -------------------------modal----------------------

	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
	});

	$('.close').on('click', function (event) {
		$(this).parents().removeClass('active');
	});

	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам

				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('modal-open');
			}
		});
	});

	// ------------- Show More ---------------------
	$("article.style-desc").has("p:nth-child(1)").append('<div class="more"><span>Узнать больше</span><img src="img/icons/next.svg" alt=""></div>');
	$("article.style-desc .more").click(function () {
		var $this = $(this),
			$cards = $(this).closest('.style-desc');
		$cards.toggleClass('open');
		$this.find('span').html($cards.hasClass('open') ? 'Свернуть' : 'Узнать больше')
	});
	// -------------------- Acordion -------------------------


	// -------------------- Checkbox ----------------
	$(window).keyup(function (e) {
		var target = $('.checkbox input:focus');
		if (e.keyCode == 9 && $(target).length) {
			$(target).parent().addClass('focused');
		}
	});

	$('.checkbox input').focusout(function () {
		$(this).parent().removeClass('focused');
	});


	// 

	
	//end
});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}
/*===== MENU HIDDEN =====*/
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== Hero slider ===============*/
var swiper = new Swiper(".hero__slider", {
	navigation: {
		nextEl: ".hero-button-next",
		prevEl: ".hero-button-prev",
	},
});

/*=============== Faq ===============*/
const accordionItems = document.querySelectorAll('.faq__accordion-item')

accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector('.faq__accordion-header')

	accordionHeader.addEventListener('click', () => {
		const openItem = document.querySelector('.accordion-open')

		toggleItem(item)

		if (openItem && openItem !== item) {
			toggleItem(openItem)
		}
	})
})

const toggleItem = (item) => {
	const accordionContent = item.querySelector('.faq__accordion-content')

	if (item.classList.contains('accordion-open')) {
		accordionContent.removeAttribute('style')
		item.classList.remove('accordion-open')
	} else {
		accordionContent.style.height = accordionContent.scrollHeight + 'px'
		item.classList.add('accordion-open')
	}
}

