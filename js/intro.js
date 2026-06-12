/* 🎵 Tela de escolha — ela escolhe a 1ª música antes de rolar a página */

const Intro = (() => {
  const screen = document.getElementById("song-intro");
  const list = document.getElementById("song-intro-list");
  const skip = document.getElementById("intro-skip");
  let onChoose = null;
  let montado = false;

  /* monta a lista de músicas como cartões clicáveis */
  function montar() {
    list.innerHTML = "";
    CONFIG.playlist.forEach((m, i) => {
      const li = document.createElement("li");
      li.className = "intro-song";
      li.style.setProperty("--d", i * 0.06 + "s");
      li.innerHTML =
        `<span class="intro-song-ico" aria-hidden="true">▶</span>` +
        `<span class="intro-song-txt"><span class="intro-song-title">${m.titulo}</span>` +
        `<span class="intro-song-artist">${m.artista}</span></span>`;
      li.addEventListener("click", () => escolher(i));
      list.appendChild(li);
    });
  }

  /* corações flutuando no fundo (mesmo efeito do cadeado) */
  function semearCoracoes() {
    const box = screen.querySelector(".lock-hearts");
    for (let i = 0; i < 16; i++) {
      const h = document.createElement("span");
      h.textContent = ["❤️", "💗", "💞", "💘"][i % 4];
      h.style.left = Math.random() * 100 + "%";
      h.style.animationDuration = 7 + Math.random() * 9 + "s";
      h.style.animationDelay = Math.random() * 8 + "s";
      h.style.fontSize = 0.8 + Math.random() * 1.3 + "rem";
      box.appendChild(h);
    }
  }

  function escolher(i) {
    screen.classList.add("hide");
    setTimeout(() => (screen.hidden = true), 700);
    if (onChoose) onChoose(i);
  }

  skip.addEventListener("click", () => escolher(0));

  return {
    show(cb) {
      onChoose = cb;
      if (!montado) {
        montar();
        semearCoracoes();
        montado = true;
      }
      screen.hidden = false;
      setTimeout(() => screen.classList.add("show"), 30);
    },
  };
})();
