var data = new Date();
document.getElementById('ano').innerHTML = `2018 - ${data.getFullYear()}`;

document.getElementById('authorAge').innerHTML = (1996 - data.getFullYear()) * (-1);

var blog = document.getElementById('blog');
var projetos = document.getElementById('projetos');
var faculdade = document.getElementById('faculdade');
var tutoriais = document.getElementById('tutoriais');
var btn = document.getElementById('menuBtn');
var subtitle = document.getElementById('pageSubtitle');

if (btn.classList.contains("active")) {
  btn.style.backgroundColor = "#1b77b3";
}

btn.style.cursor = "pointer";
btnVoltar.style.cursor = "pointer";

function goto_blog() {
    blog.style.display = "block";
    projetos.style.display = "none";
    tutoriais.style.display = "none";
    faculdade.style.display = "none";
    subtitle.innerHTML = "Bem-vindo(a) de volta ao blog daquele cara chato.";
}

function goto_projetos() {
    projetos.style.display = "block";
    blog.style.display = "none";
    tutoriais.style.display = "none";
    faculdade.style.display = "none";
    subtitle.innerHTML = "kkkk... até parece que isso vai pra frente.";
}

function goto_tutoriais() {
  tutoriais.style.display = "block";
  tutoriais.style.display = "none";
  blog.style.display = "none";
  faculdade.style.display = "none";
  subtitle.innerHTML = "kkkk... até parece que isso vai pra frente.";
}

function goto_faculdade() {
    faculdade.style.display = "block";
    blog.style.display = "none";
    tutoriais.style.display = "none";
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
