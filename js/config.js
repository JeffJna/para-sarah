/* ============================================================
   💝 CONFIGURAÇÃO DO SITE — edite tudo aqui, Jefferson!
   Nenhum outro arquivo precisa ser alterado para personalizar
   textos, datas, quiz e a carta.
   ============================================================ */

const CONFIG = {
  // ----- Quem ama e quem é amada -----
  ela: "Sarah Ariane",
  ele: "Jefferson",

  // ----- Data em que tudo começou (ano, mês 1-12, dia) -----
  inicioRelacionamento: new Date(2017, 6, 30), // 30/07/2017

  // ----- Senha do cadeado (a "chave do coração") -----
  senha: "0919",
  dicaSenha: "💡 Dica: 4 números que só nós dois sabemos…",

  // ----- Playlist (ordem em que tocam) -----
  playlist: [
    { titulo: "Meu Abrigo", artista: "Melim", arquivo: "assets/musicas/meu-abrigo.mp3" },
    { titulo: "Amei Te Ver", artista: "Tiago Iorc", arquivo: "assets/musicas/amei-te-ver.mp3" },
    { titulo: "Ainda Bem", artista: "Marisa Monte", arquivo: "assets/musicas/ainda-bem.mp3" },
    { titulo: "Pra Você Guardei o Amor", artista: "Nando Reis & Ana Cañas", arquivo: "assets/musicas/pra-voce-guardei-o-amor.mp3" },
    { titulo: "Velha Infância", artista: "Tribalistas", arquivo: "assets/musicas/velha-infancia.mp3" },
  ],

  // ----- Capítulos da nossa história -----
  // ⚠️ EDITE os títulos e textos como quiser. "fotos" são os números
  // dos arquivos assets/fotos/foto-NN.jpeg destacados em cada capítulo.
  capitulos: [
    {
      numero: "Capítulo I",
      titulo: "Onde Tudo Começou",
      texto:
        "Em 30 de julho de 2017, o universo conspirou e nossos caminhos se cruzaram. " +
        "Naquele dia eu ainda não sabia, mas tinha acabado de encontrar o amor da minha vida.",
      fotos: [1, 2, 3, 4],
      efeito: "polaroid",
    },
    {
      numero: "Capítulo II",
      titulo: "Entre Risos e Olhares",
      texto:
        "Cada sorriso seu virou meu lugar favorito. Aprendemos que felicidade " +
        "não é um destino — é estar do lado de quem a gente ama.",
      fotos: [31, 32, 33, 34],
      efeito: "cascata",
    },
    {
      numero: "Capítulo III",
      titulo: "Cumplicidade",
      texto:
        "Com o tempo, viramos um time. Nos dias bons e nos difíceis, " +
        "descobri que segurar a sua mão deixa qualquer caminho mais leve.",
      fotos: [43, 44, 45, 46],
      efeito: "zoom",
    },
    {
      numero: "Capítulo IV",
      titulo: "Nossa Celebração",
      texto:
        "E então celebramos o nosso amor diante de todos. " +
        "Você, deslumbrante. Eu, o homem mais sortudo do mundo.",
      fotos: [61, 62, 63, 64],
      efeito: "polaroid",
    },
    {
      numero: "Capítulo V",
      titulo: "Para Sempre Nós",
      texto:
        "E essa história está só começando. Ao seu lado, todo dia 12 de junho " +
        "é pouco para celebrar o que a gente construiu — e o que ainda vamos viver.",
      fotos: [66, 67, 68, 69],
      efeito: "cascata",
    },
  ],

  // ----- Galeria: total de fotos (foto-01 … foto-NN) -----
  totalFotos: 75,

  // ----- Quiz "Quanto você sabe de nós?" -----
  // ⚠️ EDITE as perguntas marcadas! "correta" é o índice da resposta certa (0 a 3).
  quiz: [
    {
      pergunta: "Quando começou a nossa história?",
      opcoes: ["14/02/2017", "30/07/2017", "12/06/2018", "30/07/2016"],
      correta: 1,
    },
    {
      pergunta: "Qual dessas músicas está na trilha sonora deste site?",
      opcoes: ["Evidências", "Meu Abrigo – Melim", "Fico Assim Sem Você", "Anunciação"],
      correta: 1,
    },
    {
      // ⚠️ EDITAR: coloque o lugar verdadeiro!
      pergunta: "Qual é o nosso programa favorito a dois?",
      opcoes: [
        "Filme e pipoca agarradinhos",
        "Jantar romântico",
        "Viajar sem rumo",
        "Ficar de bobeira juntos (e ser perfeito)",
      ],
      correta: 3,
    },
    {
      // ⚠️ EDITAR se necessário 😄
      pergunta: "Quem disse \"eu te amo\" primeiro?",
      opcoes: ["O Jefferson, óbvio", "A Sarah, claro", "Os dois, ao mesmo tempo", "Ninguém lembra, mas foi lindo"],
      correta: 0,
    },
    {
      pergunta: "O que nunca vai faltar entre a gente?",
      opcoes: ["Amor", "Risada", "Parceria", "Tudo isso e muito mais ❤️"],
      correta: 3,
    },
  ],

  // ----- Carta final -----
  // ⚠️ EDITE: escreva a SUA carta aqui. Use \n\n para separar parágrafos.
  carta:
    "Minha Sarah,\n\n" +
    "Se eu pudesse voltar a 30 de julho de 2017, eu faria tudo de novo — " +
    "mil vezes, sem mudar uma vírgula. Porque cada passo, cada riso e até " +
    "cada tropeço me trouxeram até você.\n\n" +
    "Você é meu abrigo, minha calmaria e minha festa. É a pessoa que torna " +
    "os dias comuns extraordinários e os dias difíceis suportáveis. " +
    "Obrigado por ser minha parceira, minha melhor amiga e o amor da minha vida.\n\n" +
    "Que este seja só mais um dos infinitos Dias dos Namorados que ainda " +
    "vamos celebrar juntos.\n\n" +
    "Te amo além do que as palavras alcançam.\n\n" +
    "Para sempre seu,\nJefferson",

  assinaturaCarta: "12 de junho de 2026",
};
