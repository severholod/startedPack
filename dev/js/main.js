$(document).ready(function(){
	/*----------------------Меню-----------------*/ 
	$(".anchor").on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 96
		}, 777);
		e.preventDefault();
		return false;
	});
	/*---------------------------------------------*/
	/*------------------Попапы--------------------*/
	$('.popup-sm').fancybox({
		maxWidth: 465,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	$('.popup-md').fancybox({
		maxWidth: 600,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	$('.popup-lg').fancybox({
		maxWidth: 790,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	$('.popup-xl').fancybox({
		maxWidth: 1160,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	/*--------------------------------------------*/
	/*----------------Мобильное меню-------------*/
	$('.menu-toggle').click(function(){
		$('.overlay').toggleClass('overlay-active');
		$(".mobile-menu").toggleClass('mobile-menu-active');
	});
	$('.mobile-menu__close').click(function(){
		$('.overlay').removeClass('overlay-active');
		$(".mobile-menu").removeClass('mobile-menu-active');
	});
	$('.overlay').click(function(){
		$('.overlay').removeClass('overlay-active');
		$(".mobile-menu").removeClass('mobile-menu-active');
	});
	$(document).on('click', '.toggle-close', function () {
		$(this).removeClass('toggle-close').addClass('toggle-open');
		$(this).next('.mobile-dropdown').hide(300);
	});
	$(document).on('click', '.toggle-open', function() {
		$(this).removeClass('toggle-open').addClass('toggle-close');
		$(this).next('.mobile-dropdown').show(300);
	});
	/*------------------------------------------------*/
	/*----------------Слайдер на главной-------------*/
	$('.banners-slider').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true
	});
	/*-----------------------------------------------*/
	/*----------------Формы----------------------*/
	$('.form-tel').inputmask('+7 (999) 999-99-99')
	$(document).on('submit', '.form-ajax', function(){
			var form = $(this);
			var action = form.attr('action');
			var formData = new FormData(form.get(0));
			$.ajax({
				url: action,
				type: 'post',
				data: formData,
				contentType: false,
				processData: false,
				success: function(data){
					$('.form-alert').removeClass('d-none');
				}
			});
			return false;
		});
	/*------------------------------------------*/  
});