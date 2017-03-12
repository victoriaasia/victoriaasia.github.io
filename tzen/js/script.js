jQuery(function($){

// menu toggle
$('.header-nav').click(function(){
    $('.menu').slideToggle();
    $('.hamburger').toggleClass('menu-active');

    // if(window.matchMedia('(max-width: 769px)').matches) {
    //   $('body').toggleClass('body-fixed');
    // }

});

$('.menu a').click(function(){
// smooth scroll to target
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top -90
      }, 1500);
// hide toggle-menu when selected
      $('.hamburger').removeClass('menu-active');
      $('.menu').slideUp();
      // $('body').removeClass('body-fixed');

      return false;
  });

// parallax settings
  $('.parallax-brands').parallax({imageSrc: 'img/ph1.jpg'});
  $('.parallax-gallery').parallax({imageSrc: 'img/ph2.jpg'});


// video settings
  scaleVideoContainer();
  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

  var video = document.querySelector('.fillWidth');

  video.addEventListener('contextmenu', function (e) { e.preventDefault(); e.stopPropagation(); }, false);

  if (video.hasAttribute('controls')) {
    video.removeAttribute('controls')
  };

$(window).on('resize', function() {
    scaleVideoContainer();
    scaleBannerVideoSize('.video-container .poster img');
    scaleBannerVideoSize('.video-container .filter');
    scaleBannerVideoSize('.video-container video');
});

function scaleVideoContainer() {
  var height = $(window).height() + 5;
  var unitHeight = parseInt(height) + 'px';
  $('.section-1').css('height', unitHeight);
  $('.video-container video').css('height', unitHeight);
};
function initBannerVideoSize(element){
  $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
  });
  scaleBannerVideoSize(element);
};
function scaleBannerVideoSize(element){
  var windowWidth = $(window).width(),
  windowHeight = $(window).height() + 5,
  videoWidth,
  videoHeight;
  $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');
      $(this).width(windowWidth);
      if(windowWidth < 1000){
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
          $(this).width(videoWidth).height(videoHeight);
      }
      else {
        $(this).css({'margin-left' : '0px'});
        $('.fillWidth').css({'height' : 'auto'});
        $('.filter').css({'height' : '100%'});
      }
      $('.section-1 .video-container video').addClass('fadeIn animated');
  });
};

// filter brands section
$(function(){
$('#brands-filter').mixItUp({
 load: {
   filter: 'all'
 }
});
});


var detailBrand = document.querySelectorAll('.detail-brand');
for (let i=0; i<detailBrand.length; i++) {
  detailBrand[i].addEventListener('click', function() {
    detailBrand[i].classList.toggle('hover-effect');
  });
};

// photo slider settings
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    // draggable: false,
    asNavFor: '.slider-nav',
    responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: true,
        nextArrow: '<i class="fa fa-angle-right next"></i>',
        prevArrow: '<i class="fa fa-angle-left prev"></i>',
      }
    }
  ]
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 400,
    arrows: true,
    nextArrow: '<i class="fa fa-angle-right next"></i>',
    prevArrow: '<i class="fa fa-angle-left prev"></i>',
    asNavFor: '.slider-for',
    variableWidth: false,
    focusOnSelect: true,
    infinite: true,
    responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
     {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      }
  ]
});

// floors-slider settings

$('.flexslider').flexslider({
  animation: "slide",
  start: function(slider){
      $('body').removeClass('loading');
      }
  });


$( "a.info" ).click(function(event) {
  event.preventDefault();
});

});

// remove hover on touch devices

var touch = 'ontouchstart' in document.documentElement
            || (navigator.MaxTouchPoints > 0)
            || (navigator.msMaxTouchPoints > 0);

if (touch) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
