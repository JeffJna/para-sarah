/* 🎵 Player flutuante estilo Spotify */

const Player = (() => {
  const audio = document.getElementById("audio");
  const el = document.getElementById("player");
  const elTitle = document.getElementById("pl-title");
  const elArtist = document.getElementById("pl-artist");
  const elProgress = document.getElementById("pl-progress");
  const btnPlay = document.getElementById("pl-play");
  const btnPrev = document.getElementById("pl-prev");
  const btnNext = document.getElementById("pl-next");

  let faixa = 0;

  function carregar(i) {
    faixa = (i + CONFIG.playlist.length) % CONFIG.playlist.length;
    const m = CONFIG.playlist[faixa];
    audio.src = m.arquivo;
    elTitle.textContent = m.titulo;
    elArtist.textContent = m.artista;
  }

  function tocar() {
    audio.play().then(() => {
      el.classList.add("playing");
      btnPlay.textContent = "⏸";
    }).catch(() => {
      // autoplay bloqueado: deixa em pausa, usuária toca no play
      el.classList.remove("playing");
      btnPlay.textContent = "▶";
    });
  }

  function pausar() {
    audio.pause();
    el.classList.remove("playing");
    btnPlay.textContent = "▶";
  }

  btnPlay.addEventListener("click", () => (audio.paused ? tocar() : pausar()));
  btnNext.addEventListener("click", () => { carregar(faixa + 1); tocar(); });
  btnPrev.addEventListener("click", () => { carregar(faixa - 1); tocar(); });

  audio.addEventListener("ended", () => { carregar(faixa + 1); tocar(); });
  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      elProgress.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    }
  });

  return {
    start() {
      el.hidden = false;
      carregar(0);
      tocar();
    },
  };
})();
