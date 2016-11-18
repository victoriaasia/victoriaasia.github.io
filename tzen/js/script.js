jQuery(function($){
// menu toggle
$('.menu-toggle').click(function(){
    $(this).next('ul').slideToggle();
    $('.hamburger--collapse').toggleClass('is-active');
});

$('.menu a').click(function(){
// hide toggle-menu when selected
      $('.menu').css('display', 'none');
      $('.hamburger').removeClass('is-active');
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
}
function initBannerVideoSize(element){
  $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
  });
  scaleBannerVideoSize(element);
}
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
}
});
