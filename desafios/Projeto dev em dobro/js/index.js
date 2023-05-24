const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

botaoAlterarTema.addEventListener("click", () => {body.classList.add("modo-escuro")

if(modoEscuroEstaAtivo) {body.classList.remove};

});

imagemBotaoTrocaDeTema.setAttribute("src", "../Projeto dev em dobro/imagens/moon.png");


