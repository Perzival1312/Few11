// file:///Users/jeremyjames/code/courses/few11/api-project/rotates.html

function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function addButtons() {
  var makeFullscreenButton = document.createElement("button");
  makeFullscreenButton.innerHTML = "make this page fullscreen!";
  makeFullscreenButton.style.color = 'white';
  makeFullscreenButton.style.background = 'black';
  document.body.prepend(makeFullscreenButton);
  makeFullscreenButton.addEventListener("click", function() {
    launchIntoFullscreen(document.documentElement);
    makeFullscreenButton.setAttribute("hidden", true);
    makeNotFullscreenButton.removeAttribute("hidden");
  });
  var makeNotFullscreenButton = document.createElement("button");
  makeNotFullscreenButton.innerHTML = "make this page not fullscreen";
  makeNotFullscreenButton.setAttribute("hidden", true);
  document.body.prepend(makeNotFullscreenButton);
  makeNotFullscreenButton.addEventListener("click", function() {
    exitFullscreen(document.documentElement);
    makeFullscreenButton.removeAttribute("hidden");
    makeNotFullscreenButton.setAttribute("hidden", true);
  });
};

window.onload(addButtons());
