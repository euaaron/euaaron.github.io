var data = new Date();
document.getElementById('ano').innerHTML = data.getFullYear();

var blog = document.getElementById('blog');
var projetos = document.getElementById('projetos');
var faculdade = document.getElementById('faculdade');
var btn = document.getElementById('menuBtn');
var ativ1 = document.getElementById('ativ1');
var ativ3 = document.getElementById('ativ3');
var ativ4 = document.getElementById('ativ4');
var ativ7 = document.getElementById('ativ7');
var js1 = document.getElementById('js1');
var subtitle = document.getElementById('pageSubtitle');

if (btn.classList.contains("active")) {
  btn.style.backgroundColor = "#1b77b3";
}

btn.style.cursor = "pointer";
btnVoltar.style.cursor = "pointer";
ativ1.style.cursor = "pointer";
ativ3.style.cursor = "pointer";
ativ4.style.cursor = "pointer";
ativ7.style.cursor = "pointer";
js1.style.cursor = "pointer";

function goto_blog() {
    blog.style.display = "block";
    projetos.style.display = "none";
    faculdade.style.display = "none";
    subtitle.innerHTML = "Bem-vindo(a) de volta ao blog daquele cara chato.";
}

function goto_projetos() {
    projetos.style.display = "block";
    blog.style.display = "none";
    faculdade.style.display = "none";
    subtitle.innerHTML = "kkkk... até parece que isso vai pra frente.";
}

function goto_faculdade() {
    faculdade.style.display = "block";
    blog.style.display = "none";
    projetos.style.display = "none";
    subtitle.innerHTML = "\"Ah, então é isso que o meu filho faz na faculdade!\", mãe do autor.";

    if (btn.title != "faculdade") {
      btn.classList.remove("active");
    } else {
      btn.classList.add("active");
    }

}

var showplayer = document.getElementById('musicPlayer');

function show_player() {

  if (showplayer.style.display === "none") {
    showplayer.style.display = "block";
  } else {
    showplayer.style.display = "none";
  }
}

var close = document.getElementById("alert");

function close_alert() {
  close.style.display = "none";
}
