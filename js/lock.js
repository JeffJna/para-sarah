/* 🔒 Tela de cadeado — a chave do nosso coração */

(() => {
  const screen = document.getElementById("lock-screen");
  const icon = document.getElementById("lock-icon");
  const hint = document.getElementById("lock-hint");
  const pins = [...document.querySelectorAll(".pin")];
  const site = document.getElementById("site");
  let tentativas = 0;
  let liberado = false;

  /* caractere que aparece no lugar do dígito (mais secreto 🤫) */
  const MASK = "•";

  /* corações flutuando no fundo */
  const heartsBox = document.querySelector(".lock-hearts");
  for (let i = 0; i < 18; i++) {
    const h = document.createElement("span");
    h.textContent = ["❤️", "💗", "💞", "💘"][i % 4];
    h.style.left = Math.random() * 100 + "%";
    h.style.animationDuration = 7 + Math.random() * 9 + "s";
    h.style.animationDelay = Math.random() * 8 + "s";
    h.style.fontSize = 0.8 + Math.random() * 1.3 + "rem";
    heartsBox.appendChild(h);
  }

  /* navegação entre os dígitos */
  pins.forEach((pin, i) => {
    pin.addEventListener("input", () => {
      // guarda o dígito de verdade escondido e mostra só a máscara
      const dig = pin.value.replace(/\D/g, "").slice(-1);
      if (dig) {
        pin.dataset.real = dig;
        pin.value = MASK;
        if (i < pins.length - 1) pins[i + 1].focus();
      } else {
        pin.dataset.real = "";
        pin.value = "";
      }
      if (pins.every((p) => p.dataset.real)) verificar();
    });
    pin.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !pin.value && i > 0) pins[i - 1].focus();
    });
    pin.addEventListener("paste", (e) => {
      e.preventDefault();
      const dig = (e.clipboardData.getData("text").match(/\d/g) || []).slice(0, 4);
      dig.forEach((d, j) => {
        pins[j].dataset.real = d;
        pins[j].value = MASK;
      });
      if (dig.length === 4) verificar();
    });
  });

  function verificar() {
    const codigo = pins.map((p) => p.dataset.real || "").join("");
    if (codigo === CONFIG.senha) desbloquear();
    else {
      tentativas++;
      icon.classList.add("shake");
      setTimeout(() => icon.classList.remove("shake"), 600);
      pins.forEach((p) => {
        p.value = "";
        p.dataset.real = "";
      });
      pins[0].focus();
      if (tentativas >= 2) {
        hint.textContent = CONFIG.dicaSenha;
        hint.classList.add("show");
      }
    }
  }

  function desbloquear() {
    if (liberado) return;
    liberado = true;
    icon.classList.add("unlocked");
    pins.forEach((p) => (p.disabled = true));

    setTimeout(() => {
      // tela de escolha da música; o site só aparece depois que ela escolhe
      Intro.show((faixa) => {
        site.hidden = false;
        window.scrollTo(0, 0);
        document.body.style.overflowX = "hidden";
        Player.start(faixa);   // o clique dela na música libera o autoplay 🎵
        window.initScrollAnimations();
      });
      screen.classList.add("open");
      setTimeout(() => screen.remove(), 1400);
    }, 900);
  }

  pins[0].focus();
})();
