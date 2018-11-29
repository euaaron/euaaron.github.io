var loading = document.getElementById("loader");
var page = document.getElementById("site");

function loaded() {
  loading.style.display = "none";
  page.style.display = "block";
};

var otherpage = document.getElementById('otherPage');

function atividade_1(){
  page.style.display = "none";
  otherpage.display = "block";
  otherPage.src = "http://euaaron.github.io/site";
  otherPage.src = "http://euaaron.github.io/faculdade/d_web/aula-1/";
  loading.style.display = "block";
  document.getElementById('btnVoltar').style.display = "block";
}

function atividade_3(){
  page.style.display = "none";
  otherpage.display = "block";
  otherPage.src = "http://euaaron.github.io/site";
  otherPage.src = "http://euaaron.github.io/faculdade/d_web/aula-3/";
  loading.style.display = "block";
  document.getElementById('btnVoltar').style.display = "block";
}

function atividade_4(){
  page.style.display = "none";
  otherpage.display = "block";
  otherPage.src = "http://euaaron.github.io/site";
  otherPage.src = "http://euaaron.github.io/faculdade/d_web/aula-4/";
  loading.style.display = "block";
  document.getElementById('btnVoltar').style.display = "block";
}

function atividade_7(){
  page.style.display = "none";
  otherpage.display = "block";
  otherPage.src = "http://euaaron.github.io/site";
  otherPage.src = "http://euaaron.github.io/faculdade/d_web/aula-7/";
  loading.style.display = "block";
  document.getElementById('btnVoltar').style.display = "block";
}

function javascript_1(){
  page.style.display = "none";
  otherpage.display = "block";
  otherPage.src = "http://euaaron.github.io/site";
  otherPage.src = "http://euaaron.github.io/faculdade/d_web/js-1/";
  loading.style.display = "block";
  document.getElementById('btnVoltar').style.display = "block";
}

function voltar() {
  otherPage.src = "http://euaaron.github.io/site";
  otherpage.display = "none";
  loading.style.display = "none";
  page.style.display = "block";
  document.getElementById('btnVoltar').style.display = "none";
}
