var player;
function onYouTubeIframeAPIReady() {
  console.log("onYouTubeIframeAPIReady");
  player = new YT.Player("player", {
    videoId: "hkyWLizao0Y",
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo(); // autostart
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
  }
}

function stopVideo() {
  player.stopVideo();
}

function loadYouTubeVideo() {
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

var myModalEl = document.getElementById("dynamicVideoModal");
myModalEl.addEventListener("show.bs.modal", function (event) {
  // dynamically create video inside modal
  loadYouTubeVideo();
});

// manual controls outside YT
var playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", function (event) {
  player.playVideo();
});

var pauseBtn = document.getElementById("pauseBtn");
pauseBtn.addEventListener("click", function (event) {
  player.pauseVideo();
});
