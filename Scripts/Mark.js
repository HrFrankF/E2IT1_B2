var video = document.getElementById("meinVideo");
var btn = document.getElementById("meinBtn");

function meineFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}