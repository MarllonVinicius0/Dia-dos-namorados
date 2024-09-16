document.addEventListener("DOMContentLoaded", function () {
  let card = document.getElementById("card");
  let question = document.getElementById("question");
  let message = document.getElementById("answer");
  let loveImage = document.getElementById("love-image");

  // Inicialmente, a imagem e o texto de resposta estão ocultos
  message.style.display = "none";
  loveImage.style.display = "none";

  // Exibir a mensagem e a imagem caso seja selecionado o 'sim'
  document.querySelector("#yes").addEventListener("click", function () {
    card.style.backgroundImage = "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
    question.style.display = "none";
    message.style.display = "flex";
    loveImage.style.display = "block"; // Exibe a imagem
  });

  // Movimento aleatório do botão 'não'
  document.querySelector("#no").addEventListener("mouseover", function () {
    let width = window.innerWidth - 50;  // Largura da janela
    let height = window.innerHeight - 50; // Altura da janela

    this.style.position = "absolute";
    this.style.top = Math.random() * height + "px";  // Usar height para 'top'
    this.style.left = Math.random() * width + "px";  // Usar width para 'left'
  });
});
