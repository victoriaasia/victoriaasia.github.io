$(document).ready(() => {
// cut text
$(".js-slider-text").each (function(){
 if ($(this).text().length > 100)
   $(this).text($(this).text().substring(0, 100) + '...');
});

$(".js-sale-title").each (function(){
 if ($(this).text().length > 40)
   $(this).text($(this).text().substring(0, 40) + '...');
});

$(".js-sale-text").each (function(){
 if ($(this).text().length > 90)
   $(this).text($(this).text().substring(0, 90) + '...');
});

// hamburger-menu
$('.header-menu-hamburger').click(function(){
  $('nav').slideToggle();
  $('.header-menu-hamburger').toggleClass('header-menu-active');

  if(window.matchMedia('(max-width: 769px)').matches) {
    $('body').toggleClass('body-fixed');
  }
});

});
