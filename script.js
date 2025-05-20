const carrossel = document.getElementById("carrossel");

function pausar() {
  carrossel.style.animationPlayState = 'paused';
}

function continuar() {
  carrossel.style.animationPlayState = 'running';
}

function avancar() {
  carrossel.scrollLeft += 200;
}

function voltar() {
  carrossel.scrollLeft -= 200;
}
