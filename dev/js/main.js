$(document).ready(function(){
	/*------------------Попапы--------------------*/
	$('.fancybox').fancybox({
		maxWidth: 460,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	$('.politic').fancybox({
		maxWidth: 600,
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
});