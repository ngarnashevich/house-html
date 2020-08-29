window.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".menu");
	const menuItem = document.querySelectorAll(".menu_item");
	const hamburger = document.querySelector(".hamburger");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		menu.classList.toggle("menu_active");
	});

	menuItem.forEach((item) => {
		item.addEventListener("click", () => {
			hamburger.classList.toggle("hamburger_active");
			menu.classList.toggle("menu_active");
		});
	});

	const accordionBtn = document.querySelectorAll(".accordion__btn");
	const questionsBody = document.querySelectorAll(".questions__body");

	for (let i = 0; i < accordionBtn.length; i++) {
		accordionBtn[i].addEventListener("click", () => {
			accordionBtn[i].classList.toggle("accordion__btn_active");
			questionsBody[i].classList.toggle("questions__body_active");
		});
	}

	const modalClose = document.querySelector(".modal__close");
	const overlay = document.querySelector(".overlay");
	const consultation = document.querySelectorAll(".services__btn");

	consultation.forEach(function (consultation) {
		consultation.addEventListener("click", function (e) {
			overlay.style.display = "block";
		});
	});

	modalClose.addEventListener("click", function () {
		overlay.style.display = "none";
	});

	const contactsBtn = document.querySelector(".contacts__btn");
	contactsBtn.addEventListener("click", function () {
		overlay.style.display = "block";
	});
});

$(document).ready(function () {
	$(".works__slides").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button class="btn-prev"></button>',
		nextArrow: '<button class="btn-next"></button>',
		// variableWidth: true
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 1,
					evArrow: '<button class="btn-prev"></button>',
					nextArrow: '<button class="btn-next"></button>',
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					evArrow: '<button class="btn-prev"></button>',
					nextArrow: '<button class="btn-next"></button>',
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					evArrow: '<button class="btn-prev"></button>',
					nextArrow: '<button class="btn-next"></button>',
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 530,
				settings: {
					slidesToShow: 1,
					arrows: false,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".partners__list").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: document.querySelector(".control__left"),
		nextArrow: document.querySelector(".control__right"),
		// variableWidth: true
	});
	$(".control__left").on("click", function () {
		$("slider").slick("slickPrev");
	});
	$(".control__left").on("click", function () {
		$("slider").slick("slickNext");
	});

	$(".questions__btn").on("click", function () {
		$(".q-overlay").fadeIn("slow");
	});

	$(".modal__close").on("click", function () {
		$(".overlay").fadeOut("slow");
	});
	$(".q-modal__close ").on("click", function () {
		$(".q-overlay").fadeIn("slow");
	});

	$(".q-modal__close").on("click", function () {
		$(".q-overlay").fadeOut("slow");
	});

	$("#modal-form").validate({
		rules: {
			name: "required",
			phone: "required",
		},
		messages: {
			name: "Пожайлуста, введите ваше имя",
			phone: {
				required: "Пожайлуста, введите ваш номер телефона",
			},
		},
	});

	$("#form__promo").validate({
		rules: {
			name: "required",
			phone: "required",
		},
		messages: {
			name: "Пожайлуста, введите ваше имя",
			phone: {
				required: "Пожайлуста, введите ваш номер телефона",
			},
		},
	});
	$("#q-form").validate({
		rules: {
			name: "required",
			textarea: "required",
		},
		messages: {
			name: "Пожайлуста, введите ваше имя",
			textarea: {
				required: "Пожайлуста, введите сообщение",
			},
		},
	});
});

// const qModalClose = document.querySelector(".q-modal__close");
// const qOverlay = document.querySelector("");
// const qButton = document.querySelector("");

// qButton.addEventListener("click", function () {
// 	qOverlay.style.display = "block";
// });

// qModalClose.addEventListener("click", function () {
// 	qOverlay.style.display = "none";
// });
