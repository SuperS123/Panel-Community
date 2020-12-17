var actions;

function start() {
document.getElementsByClassName("console")[0].value = "\n Server marked as starting...";
setTimeout(function(){ document.getElementsByClassName("console")[0].value = "\n > node index.js"; }, 3000);
setTimeout(function(){ document.getElementsByClassName("console")[0].value = "\n Hello world!"; }, 3000);

actions++
}

function stop() {
document.getElementsByClassName("console")[0].value = "\n Server marked as stopping...";
actions++
}

function restart() {
document.getElementsByClassName("console")[0].value = "\n Server marked as restarting...";
actions++
}


if(actions > 3) {
document.getElementsByClassName("console")[0].value = "\n Error Event [1b2f0efa-17bf-4234-913a-60a6f972ad03]: another power action is currently being processed for this server, please try again later";
}

