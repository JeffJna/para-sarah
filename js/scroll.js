/* 📖 Construção das seções + animações de scrollytelling (GSAP) */

(() => {
  const foto = (n) => `assets/fotos/foto-${String(n).padStart(2, "0")}.jpeg`;

  /* ---------- hero: nome letra a letra + estrelas ---------- */
  document.getElementById("hero-de").textContent = CONFIG.ele;
  const nomeEl = document.getElementById("hero-nome");
  nomeEl.innerHTML = [...CONFIG.ela]
    .map((c) => `<span class="ltr">${c === " " ? "&nbsp;" : c}</span>`)
    .join("");

  // gradiente rosé→rosa→dourado aplicado letra a letra
  // (background-clip: text não funciona com spans transformados pelo GSAP)
  const stops = [[232, 180, 184], [255, 90, 122], [233, 201, 143]];
  const ltrs = nomeEl.querySelectorAll(".ltr");
  ltrs.forEach((sp, i) => {
    const t = ltrs.length > 1 ? i / (ltrs.length - 1) : 0;
    const seg = t * (stops.length - 1);
    const a = stops[Math.floor(seg)];
    const b = stops[Math.min(Math.ceil(seg), stops.length - 1)];
    const f = seg - Math.floor(seg);
    const cor = a.map((v, k) => Math.round(v + (b[k] - v) * f));
    sp.style.color = `rgb(${cor.join(",")})`;
  });

  const stars = document.querySelector(".hero-stars");
  for (let i = 0; i < 70; i++) {
    const s = document.createElement("i");
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 3 + "s";
    s.style.scale = 0.5 + Math.random();
    stars.appendChild(s);
  }

  /* ---------- capítulos ---------- */
  const wrap = document.getElementById("capitulos");
  wrap.innerHTML = CONFIG.capitulos
    .map(
      (cap) => `
    <section class="section capitulo efeito-${cap.efeito}">
      <p class="cap-numero">${cap.numero}</p>
      <h2 class="cap-titulo">${cap.titulo}</h2>
      <p class="cap-texto">${cap.texto}</p>
      <div class="cap-fotos">
        ${cap.fotos
          .map(
            (n) => `<div class="ph"><img src="${foto(n)}" alt="Nossa foto" loading="lazy" /></div>`
          )
          .join("")}
      </div>
    </section>`
    )
    .join("");

  /* ---------- mural ---------- */
  const mural = document.getElementById("mural");
  let muralHtml = "";
  for (let n = 1; n <= CONFIG.totalFotos; n++) {
    muralHtml += `<img src="${foto(n)}" alt="Nossa foto ${n}" loading="lazy" data-full="${foto(n)}" />`;
  }
  mural.innerHTML = muralHtml;

  /* ---------- lightbox ---------- */
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  mural.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      lbImg.src = e.target.dataset.full;
      lb.hidden = false;
    }
  });
  lb.addEventListener("click", () => (lb.hidden = true));

  /* ---------- texto final ---------- */
  document.getElementById("final-sub").textContent =
    `…até a eternidade. Te amo, ${CONFIG.ela}. ❤️`;
  document.getElementById("btn-revive").addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  /* ---------- corações do final (canvas) ---------- */
  function iniciarChuvaDeCoracoes() {
    const canvas = document.getElementById("hearts-canvas");
    const ctx = canvas.getContext("2d");
    const seção = document.getElementById("final");
    let ativo = false;
    const corações = [];

    function redimensionar() {
      canvas.width = seção.clientWidth;
      canvas.height = seção.clientHeight;
    }
    redimensionar();
    window.addEventListener("resize", redimensionar);

    function novo() {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 30,
        v: 0.6 + Math.random() * 1.6,
        tam: 10 + Math.random() * 22,
        osc: Math.random() * Math.PI * 2,
        alfa: 0.25 + Math.random() * 0.55,
      };
    }

    function desenhar() {
      if (!ativo) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (corações.length < 40 && Math.random() < 0.3) corações.push(novo());
      for (const c of corações) {
        c.y -= c.v;
        c.osc += 0.02;
        const x = c.x + Math.sin(c.osc) * 22;
        ctx.globalAlpha = c.alfa;
        ctx.font = `${c.tam}px serif`;
        ctx.fillText("❤️", x, c.y);
        if (c.y < -40) Object.assign(c, novo());
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(desenhar);
    }

    new IntersectionObserver(
      (entries) => {
        const vis = entries[0].isIntersecting;
        if (vis && !ativo) { ativo = true; redimensionar(); desenhar(); }
        else if (!vis) ativo = false;
      },
      { threshold: 0.15 }
    ).observe(seção);
  }
  iniciarChuvaDeCoracoes();

  /* ---------- animações GSAP (chamadas após o desbloqueio) ---------- */
  window.initScrollAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    // entrada do hero
    gsap.timeline()
      .from(".hero-pre, .hero-de, .hero-para-label", { opacity: 0, y: 20, duration: 0.8, stagger: 0.25 }, 0.2)
      .to(".hero-nome .ltr", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: "back.out(2)",
      }, 0.5);

    // fade-up genérico de títulos/textos
    document.querySelectorAll(".sec-title, .sec-sub, .cap-numero, .cap-titulo, .cap-texto, .counter-facts, .final-pre, .final-title, .final-sub").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 36,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 86%" },
      });
    });

    // cards do contador
    gsap.from(".cnt-card", {
      opacity: 0,
      scale: 0.7,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.8)",
      scrollTrigger: { trigger: "#counter-grid", start: "top 82%" },
    });

    // fotos dos capítulos — efeito por tipo
    document.querySelectorAll(".capitulo").forEach((sec) => {
      const fotos = sec.querySelectorAll(".ph");
      const base = { scrollTrigger: { trigger: sec.querySelector(".cap-fotos"), start: "top 84%" } };
      if (sec.classList.contains("efeito-polaroid")) {
        gsap.from(fotos, { ...base, opacity: 0, y: 70, rotation: () => gsap.utils.random(-16, 16), duration: 0.9, stagger: 0.14, ease: "back.out(1.5)" });
      } else if (sec.classList.contains("efeito-zoom")) {
        gsap.from(fotos, { ...base, opacity: 0, scale: 1.35, duration: 1.1, stagger: 0.15, ease: "power3.out" });
      } else {
        gsap.from(fotos, { ...base, opacity: 0, y: 90, duration: 0.9, stagger: { each: 0.12, from: "edges" }, ease: "power2.out" });
      }
      // parallax leve nas fotos durante o scroll
      gsap.to(fotos, {
        y: (i) => (i % 2 ? -22 : 18),
        ease: "none",
        scrollTrigger: { trigger: sec, start: "top bottom", end: "bottom top", scrub: 1.2 },
      });
    });

    // mural em lote
    ScrollTrigger.batch("#mural img", {
      start: "top 92%",
      onEnter: (els) =>
        gsap.from(els, { opacity: 0, y: 40, scale: 0.92, duration: 0.7, stagger: 0.06, ease: "power2.out", overwrite: true }),
    });

    // quiz e envelope
    gsap.from("#quiz-card", {
      opacity: 0, y: 50, duration: 0.9,
      scrollTrigger: { trigger: "#quiz-card", start: "top 85%" },
    });
    gsap.from("#envelope-wrap", {
      opacity: 0, scale: 0.6, duration: 1, ease: "back.out(1.6)",
      scrollTrigger: { trigger: "#envelope-wrap", start: "top 82%" },
    });

    ScrollTrigger.refresh();
  };
})();
