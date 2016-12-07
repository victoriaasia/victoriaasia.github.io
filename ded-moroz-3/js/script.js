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
