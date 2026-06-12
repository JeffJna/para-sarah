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
  const btnList = document.getElementById("pl-list");
  const queue = document.getElementById("pl-queue");
  const queueList = document.getElementById("pl-queue-list");
  const btnQueueClose = document.getElementById("pl-queue-close");

  let faixa = 0;

  /* monta a lista de músicas que ela pode escolher */
  function montarLista() {
    queueList.innerHTML = "";
    CONFIG.playlist.forEach((m, i) => {
      const li = document.createElement("li");
      li.dataset.idx = i;
      li.innerHTML =
        `<span class="pl-q-eq" aria-hidden="true"><i></i><i></i><i></i></span>` +
        `<span class="pl-q-txt"><span class="pl-q-title">${m.titulo}</span>` +
        `<span class="pl-q-artist">${m.artista}</span></span>`;
      li.addEventListener("click", () => {
        carregar(i);
        tocar();
        fecharLista();
      });
      queueList.appendChild(li);
    });
  }

  /* destaca a faixa que está tocando agora */
  function marcarAtiva() {
    [...queueList.children].forEach((li) => {
      li.classList.toggle("active", Number(li.dataset.idx) === faixa);
    });
  }

  function abrirLista() {
    queue.hidden = false;
    setTimeout(() => queue.classList.add("open"), 20);
  }
  function fecharLista() {
    queue.classList.remove("open");
    setTimeout(() => (queue.hidden = true), 250);
  }
  function alternarLista() {
    queue.hidden ? abrirLista() : fecharLista();
  }

  function carregar(i) {
    faixa = (i + CONFIG.playlist.length) % CONFIG.playlist.length;
    const m = CONFIG.playlist[faixa];
    audio.src = m.arquivo;
    elTitle.textContent = m.titulo;
    elArtist.textContent = m.artista;
    marcarAtiva();
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
  btnList.addEventListener("click", alternarLista);
  btnQueueClose.addEventListener("click", fecharLista);

  audio.addEventListener("ended", () => { carregar(faixa + 1); tocar(); });
  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      elProgress.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    }
  });

  return {
    start(i = 0) {
      el.hidden = false;
      montarLista();
      carregar(i);
      tocar();
    },
  };
})();
