/* 🎯 Quiz "Quanto você sabe de nós?" */

(() => {
  const card = document.getElementById("quiz-card");
  let atual = 0;
  let acertos = 0;

  const frasesAcerto = ["Isso aí, meu amor! 💘", "Você me conhece mesmo! 😍", "Perfeito! ✨", "Essa foi fácil pra você 😏", "Coração conectado! 💞"];
  const frasesErro = ["Quaaase! 😅", "Hmm… vou fingir que não vi 😄", "Errou, mas continua linda 💕"];

  function renderPergunta() {
    const q = CONFIG.quiz[atual];
    card.innerHTML = `
      <p class="qz-step">Pergunta ${atual + 1} de ${CONFIG.quiz.length}</p>
      <p class="qz-pergunta">${q.pergunta}</p>
      ${q.opcoes.map((op, i) => `<button class="qz-opcao" data-i="${i}">${op}</button>`).join("")}
      <p class="qz-feedback" id="qz-feedback"></p>
    `;
    card.querySelectorAll(".qz-opcao").forEach((btn) =>
      btn.addEventListener("click", () => responder(btn, q))
    );
  }

  function responder(btn, q) {
    const i = Number(btn.dataset.i);
    const botoes = card.querySelectorAll(".qz-opcao");
    botoes.forEach((b) => (b.disabled = true));
    botoes[q.correta].classList.add("certa");
    const fb = document.getElementById("qz-feedback");

    if (i === q.correta) {
      acertos++;
      fb.textContent = frasesAcerto[atual % frasesAcerto.length];
      confetti({
        particleCount: 70,
        spread: 75,
        origin: { y: 0.7 },
        colors: ["#ff5a7a", "#e8b4b8", "#e9c98f", "#ffffff"],
      });
    } else {
      btn.classList.add("errada");
      fb.textContent = frasesErro[atual % frasesErro.length];
    }

    setTimeout(() => {
      atual++;
      if (atual < CONFIG.quiz.length) renderPergunta();
      else renderResultado();
    }, 1700);
  }

  function renderResultado() {
    const total = CONFIG.quiz.length;
    let msg;
    if (acertos === total) msg = "Gabaritou! Você é oficialmente a maior especialista em nós dois. 🏆";
    else if (acertos >= total - 1) msg = "Quase perfeito — e perfeita pra mim você já é. 😍";
    else if (acertos >= Math.ceil(total / 2)) msg = "Mandou bem! O resto a gente revisa juntinho. 😄";
    else msg = "Tudo bem… isso só prova que ainda temos uma vida inteira pra nos conhecer melhor. 💕";

    card.innerHTML = `
      <div class="qz-resultado">
        <h3>${acertos} de ${total}!</h3>
        <p>${msg}</p>
        <p style="margin-top:1.2rem">Agora continue rolando…<br/>a melhor parte ainda está por vir. 💌</p>
      </div>
    `;
    confetti({ particleCount: 140, spread: 100, origin: { y: 0.6 }, colors: ["#ff5a7a", "#e8b4b8", "#e9c98f"] });
  }

  renderPergunta();
})();
