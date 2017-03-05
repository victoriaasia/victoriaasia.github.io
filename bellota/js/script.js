document.addEventListener('DOMContentLoaded', function(){
  (function cutLongText() {
   let elem, size, text;
   elem = document.querySelector('.js-text');
   text = elem.innerHTML;
   size = 100;
   if (text.length > size) {
       text = text.slice(0, 100);
   }
   elem.innerHTML = text + '...';
 })();


 $('.header-menu-hamburger').click(function(){
    $('nav').slideToggle();
    $('.header-menu-hamburger').toggleClass('header-menu-active');

    if(window.matchMedia('(max-width: 769px)').matches) {
      $('body').toggleClass('body-fixed');
    }

});

});
