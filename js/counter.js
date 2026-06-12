/* ⏳ Contador de tempo juntos, ao vivo */

(() => {
  const grid = document.getElementById("counter-grid");
  const facts = document.getElementById("counter-facts");

  const unidades = [
    ["anos", "Anos"],
    ["meses", "Meses"],
    ["dias", "Dias"],
    ["horas", "Horas"],
    ["minutos", "Minutos"],
    ["segundos", "Segundos"],
  ];

  grid.innerHTML = unidades
    .map(
      ([id, label]) => `
      <div class="cnt-card">
        <div class="cnt-num" id="cnt-${id}">0</div>
        <div class="cnt-label">${label}</div>
      </div>`
    )
    .join("");

  function calcular() {
    const inicio = CONFIG.inicioRelacionamento;
    const agora = new Date();

    // anos/meses no calendário, depois o resto em dias/h/min/s
    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    if (dias < 0) {
      meses -= 1;
      dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    }
    if (meses < 0) {
      anos -= 1;
      meses += 12;
    }

    const horas = agora.getHours() >= inicio.getHours()
      ? agora.getHours() - inicio.getHours()
      : 24 + agora.getHours() - inicio.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    const totalMs = agora - inicio;
    const totalDias = Math.floor(totalMs / 86400000);
    const totalHoras = Math.floor(totalMs / 3600000);
    const batidas = Math.floor((totalMs / 60000) * 75); // ~75 bpm

    return { anos, meses, dias, horas, minutos, segundos, totalDias, totalHoras, batidas };
  }

  function fmt(n) { return n.toLocaleString("pt-BR"); }

  function atualizar() {
    const t = calcular();
    document.getElementById("cnt-anos").textContent = t.anos;
    document.getElementById("cnt-meses").textContent = t.meses;
    document.getElementById("cnt-dias").textContent = t.dias;
    document.getElementById("cnt-horas").textContent = t.horas;
    document.getElementById("cnt-minutos").textContent = t.minutos;
    document.getElementById("cnt-segundos").textContent = t.segundos;

    facts.innerHTML =
      `Isso dá <strong>${fmt(t.totalDias)} dias</strong> de nós, ` +
      `<strong>${fmt(t.totalHoras)} horas</strong> do meu lugar favorito no mundo ` +
      `e cerca de <strong>${fmt(t.batidas)}</strong> batidas deste coração que é seu. 💗`;
  }

  atualizar();
  setInterval(atualizar, 1000);
})();
