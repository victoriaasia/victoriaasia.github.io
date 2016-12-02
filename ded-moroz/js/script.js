window.onload = function() {

  var video = document.getElementById("dm-video");

  video.addEventListener("contextmenu", function (e) { e.preventDefault(); e.stopPropagation(); }, false);

  var playButton = document.getElementById("dm-js-control");

  playButton.addEventListener("click", function() {
    if (video.paused) {
      video.play();
      playButton.classList.toggle("dm-control-hide");
    } else {
      video.pause();
      playButton.classList.toggle("dm-control-hide");
    }
  });
}
