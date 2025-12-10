const sounds = ["applause", "boo", "gasp"];
const buttons = document.getElementById("buttons");

const stopSounds = () => {
  // Stop tous les sons
  sounds.forEach((sound) => {
    const currentSound = document.getElementById(sound);
    currentSound.pause();
    currentSound.currentTime = 0;
  });

  // Retire l'état "playing" de tous les boutons
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.classList.remove("playing");
  });
};

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  const audio = document.getElementById(sound);

  btn.addEventListener("click", () => {
    const isAlreadyPlaying =
      !audio.paused && !audio.ended && audio.currentTime > 0;

    stopSounds();

    // Si on reclique sur le même bouton alors que ça jouait déjà, on arrête juste
    if (!isAlreadyPlaying) {
      audio.play();
      btn.classList.add("playing");
    }
  });

  // Quand le son se termine naturellement, on enlève l'état "playing"
  audio.addEventListener("ended", () => {
    btn.classList.remove("playing");
  });

  buttons.appendChild(btn);
});
