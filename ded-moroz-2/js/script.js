window.onload = function() {

  var video = document.getElementById('dm-video');
  var playButton = document.getElementById('dm-js-control');

  video.addEventListener('contextmenu', function (e) { e.preventDefault(); e.stopPropagation(); }, false);

  if (video.hasAttribute('controls')) {
    video.removeAttribute('controls')
  }

  playButton.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      playButton.classList.toggle('dm-control-hide');
    } else {
      video.pause();
      playButton.classList.toggle('dm-control-hide');
    }
  });
};


var btn = document.querySelector('.dm-js-btn');
var wrapperBlock = document.querySelector('.-first');
var block = document.querySelector('.dm-js-content');
var blockResult = document.querySelector('.dm-result-content');

btn.onclick = function(event) {
  event = event || window.event;
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}

btn.addEventListener("click", function(){
    setTimeout(function(){
      block.classList.add('dm-hidden');
      wrapperBlock.classList.add('-first-result');
      blockResult.classList.remove('dm-hidden');
    }, 1500);
});

// photo-preview
$(document).ready(function() {
  $.uploadPreview({
    input_field: '#dm-image-upload',
    preview_box: '#dm-image-preview',
    label_field: '#dm-image-label'
  });
});

// modal
$('.dm-btn-join').click( function(event){
  event.preventDefault();
  $('#dm-overlay').fadeIn(200,
    function(){
    $('#dm-modal-1').css('display', 'block').animate({opacity: 1, top: '40px'}, 300);
   });
});

$('.modal-close, #dm-overlay').click( function(){
  $('.dm-modal')
    .animate({opacity: 0, top: '20px'}, 200,
      function(){
        $(this).css('display', 'none');
        $('#dm-overlay').fadeOut(400);
      }
    );
});

$('.js-modal-1').click( function(event){
  event.preventDefault();
    $('#dm-modal-1').css('display', 'none');
    $('#dm-modal-2').css('display', 'block').animate({opacity: 1, top: '40px'}, 300);
});

$('.js-modal-2').click( function(event){
  event.preventDefault();
    $('#dm-modal-2').css('display', 'none');
    $('#dm-modal-3').css('display', 'block').animate({opacity: 1, top: '40px'}, 300);
});
