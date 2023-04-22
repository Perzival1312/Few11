
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.remove("nav-border");
  } else {
    header.classList.remove("sticky");
    header.classList.add("nav-border");
  }
}
