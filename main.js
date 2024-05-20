// Função para tocar o som
function tocaSom(idAudio) {
  const elemento = document.querySelector(idAudio);
  if (elemento) {
    elemento.play();
  } else {
    console.error(`Elemento de áudio com id ${idAudio} não encontrado.`);
  }
}

// Função para lidar com cliques nos botões
function tocaSomDoBotao(evento) {
  const instrumento = evento.target.classList[0]; // Pega a primeira classe
  const idAudio = `#som_${instrumento}`;
  tocaSom(idAudio);
  botaoAnimacao(evento.target); // Adiciona a animação ao clicar no botão
}

// Função para lidar com teclas pressionadas
function tocaSomDaTecla(evento) {
  const tecla = evento.key.toLowerCase();
  const seletorAudio = `#som_${tecla}`;
  tocaSom(seletorAudio);
  const teclaPressionada = document.querySelector(`.${tecla}`); // Seleciona o botão com a classe da tecla
  if (teclaPressionada) {
    botaoAnimacao(teclaPressionada); // Adiciona a animação ao pressionar a tecla
  }
}

// Função para aplicar a animação do botão
function botaoAnimacao(elemento) {
  elemento.classList.add("pressed"); // Adiciona a classe "pressed" para a animação
  setTimeout(() => {
    elemento.classList.remove("pressed"); // Remove a classe "pressed" após o tempo definido
  }, 100); // Tempo de 100ms (ajuste conforme necessário)
}

// Selecionando os botões
const listaDeTeclas = document.querySelectorAll(".drum");

// Adicionando eventos aos botões
listaDeTeclas.forEach((tecla) => {
  // Adicionando evento de clique aos botões
  tecla.addEventListener("click", tocaSomDoBotao);

  // Adicionando evento de tecla pressionada aos botões
  tecla.addEventListener("keydown", (evento) => {
    if (evento.code === "Space" || evento.code === "Enter") {
      // Adicionando a classe "ativa" para o efeito visual
      tecla.classList.add("ativa");
    }
  });

  // Adicionando evento de tecla solta aos botões
  tecla.addEventListener("keyup", () => {
    tecla.classList.remove("ativa");
  });
});

// Adicionando evento de tecla pressionada à janela
window.addEventListener("keydown", tocaSomDaTecla);
