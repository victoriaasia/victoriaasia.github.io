window.onload = function() {

  var video = document.getElementById("dm-video");
  var playButton = document.getElementById("dm-js-control");

  video.addEventListener("contextmenu", function (e) { e.preventDefault(); e.stopPropagation(); }, false);

  if (video.hasAttribute("controls")) {
    video.removeAttribute("controls")
  } 

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
