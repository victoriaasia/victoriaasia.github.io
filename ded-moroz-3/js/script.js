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

// cut text in modal window
var size = 100,
modalContent= $('.dm-modal__text'),
modalText = modalContent.text();
if(modalText.length > size){
modalContent.text(modalText.slice(0, size) + ' ...');
}

// modal window
$('.dm-img').click( function(event){ // лoвим клик пo ссылки с id="go"
	event.preventDefault();
  $('#dm-overlay').fadeIn(200,
	 	function(){
		$('#dm-modal').css('display', 'block').animate({opacity: 1, top: '40px'}, 300);
   });
});
$('.modal-close, #dm-overlay').click( function(){
	$('#dm-modal')
		.animate({opacity: 0, top: '20px'}, 200,
			function(){
				$(this).css('display', 'none');
        $('#dm-overlay').fadeOut(400); // скрывaем пoдлoжку
			}
		);
});
