let juego = document.getElementById("juego");
let botellas = document.getElementById("botellas");
const audio = new Audio("../sonido/1.mp3");

const botella = () => {
  for (let i = 1; i < 11; i++) {
    botellas.innerHTML += `<div id="botella" class="botella botella-${i}"><h3>${i}<h3/></div>`;
  }
};

const caida = () => {
  let contador = 11;

  document.addEventListener("keydown", (event) => {
    if (contador >= 0) {
      contador--;

      let botella = document.getElementsByClassName(`botella-${contador}`);

      botella[0].classList.toggle("caida");
      botella[0].classList.remove(`botella-${contador}`, "botella");
      console.log(audio.currentTime); //tiempo que lleva el tema
    }
  });
};

const musica = () => {
  document.addEventListener("click", () => {
    audio.play();
    audio.volume = 1;
  });
};

const main = () => {
  const tiempo = audio.currentTime;
  musica();
  botella();
  caida();
};

main();
