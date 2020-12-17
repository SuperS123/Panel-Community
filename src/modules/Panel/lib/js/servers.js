var elements = document.getElementsByClassName("server-container");

var redirect = function() {
window.location.href = "?server=BLANK"
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', redirect, false);
}