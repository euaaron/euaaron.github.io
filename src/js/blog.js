var box_1 = document.getElementById("box_1");
var box_2 = document.getElementById("box_2");

var close = document.getElementById("maintence_alert");

function close_alert() {
  close.style.display = "none";
}

function sobre() {
    box_1.style.display = "block";
    box_2.style.display = "none";
}

function contato() {
    box_2.style.display = "block";
    box_1.style.display = "none";
}
