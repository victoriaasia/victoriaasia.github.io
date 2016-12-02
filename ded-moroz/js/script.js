window.onload = function() {

  var video = document.getElementById("dm-video");

  var playButton = document.getElementById("dm-js-control");

  playButton.addEventListener("click", function() {
    if (video.paused == true) {
      video.play();
      playButton.classList.toggle("dm-control-hide");
    } else {
      video.pause();
      playButton.classList.toggle("dm-control-hide");
    }
  });
}
