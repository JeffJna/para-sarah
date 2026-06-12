/* 💌 Envelope + carta com efeito máquina de escrever */

(() => {
  const envelope = document.getElementById("envelope");
  const wrap = document.getElementById("envelope-wrap");
  const paper = document.getElementById("letter-paper");
  const textoEl = document.getElementById("letter-text");
  const dataEl = document.getElementById("letter-date");
  let aberta = false;

  function abrir() {
    if (aberta) return;
    aberta = true;
    envelope.classList.add("open");

    setTimeout(() => {
      gsap.to(wrap, {
        opacity: 0,
        scale: 0.85,
        duration: 0.6,
        onComplete: () => {
          wrap.style.display = "none";
          paper.hidden = false;
          gsap.from(paper, { opacity: 0, y: 60, duration: 0.8, ease: "power2.out" });
          datilografar();
        },
      });
    }, 1500);
  }

  function datilografar() {
    const texto = CONFIG.carta;
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    textoEl.textContent = "";
    textoEl.appendChild(cursor);

    let i = 0;
    (function tick() {
      if (i < texto.length) {
        cursor.before(texto[i]);
        i++;
        const pausa = ".!?\n".includes(texto[i - 1]) ? 220 : 28;
        setTimeout(tick, pausa);
      } else {
        cursor.remove();
        dataEl.textContent = CONFIG.assinaturaCarta;
        gsap.from(dataEl, { opacity: 0, duration: 1.2 });
        confetti({
          particleCount: 160,
          spread: 110,
          origin: { y: 0.65 },
          shapes: ["circle"],
          colors: ["#ff5a7a", "#e8b4b8", "#e9c98f", "#ffffff"],
        });
      }
    })();
  }

  envelope.addEventListener("click", abrir);
  envelope.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") abrir();
  });
})();
