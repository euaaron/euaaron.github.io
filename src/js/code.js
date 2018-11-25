var data = new Date();
document.getElementById('ano').innerHTML = data.getFullYear();

var blog = document.getElementById('blog');
var projetos = document.getElementById('projetos');
var faculdade = document.getElementById('faculdade');
var btnswitch = document.getElementById('menu_btn');
var subtitle = document.getElementById('page_subtitle');

if (btnswitch.classList.contains("active")) {
  btnswitch.style.backgroundColor = "#1b77b3";
}

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

    if (btnswitch.title != "faculdade") {
      btnswitch.classList.remove("active");
    } else {
      btnswitch.classList.add("active");
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
