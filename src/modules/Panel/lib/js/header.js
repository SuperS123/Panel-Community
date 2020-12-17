window.onscroll = function() {HeaderOffset()};

var header = document.getElementById("control-header");
var sticky = header.offsetTop;

function HeaderOffset() {
  if (window.pageYOffset > control-sticky-header) {
    header.classList.add("control-sticky-header");
  } else {
    header.classList.remove("control-sticky-header");
  }
}