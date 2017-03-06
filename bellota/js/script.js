$(window).load(() => {
$('.flexslider').flexslider({
    animation: "slide",
    start: function(slider){
        $('body').removeClass('loading');
        }
    });
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
// to-top btn
if(window.matchMedia('(min-width: 1100px)').matches) {

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#to-top').show(200);
    } else {
        $('#to-top').hide(200);
    }
  });
  $('#to-top').click(function() {
      $('#to-top').css('background', '#ff151f');
      $('body,html').animate({
          scrollTop : 0
      }, 500);
  });
} else {
  $('#to-top').click(function() {
      $('body,html').animate({
          scrollTop : 0
      }, 500);
  });
};

});
