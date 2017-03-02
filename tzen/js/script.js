jQuery(function($){

// parallax settings
$('.parallax-brands').parallax({imageSrc: 'img/ph1.jpg'});
$('.parallax-gallery').parallax({imageSrc: 'img/ph2.jpg'});

// menu toggle
$('.header-nav').click(function(){
    $('.menu').slideToggle();
    $('.hamburger').toggleClass('menu-active');
});

$('.menu a').click(function(){
// hide toggle-menu when selected
      $('.menu').css('display', 'none');
      $('.hamburger').removeClass('menu-active');
// smooth scroll to target
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top -90
      }, 1500);
      return false;
  });


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
  $('.section-1').css('height',unitHeight);
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
    arrows: true,
    nextArrow: '<i class="fa fa-angle-double-right next"></i>',
    prevArrow: '<i class="fa fa-angle-double-left prev"></i>',
    fade: true,
    // draggable: false,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 400,
    arrows: false,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

$('#tab3').prop( "checked", true);


});
