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
  inicioRelacionamento: new Date(2017, 6, 23), // 23/07/2017

  // ----- Senha do cadeado (a "chave do coração") -----
  senha: "0919",
  dicaSenha: "💡 Dica: uma chave pequena para uma história enorme…",

  // ----- Playlist (ordem em que tocam) -----
  playlist: [
    { titulo: "Pra Você Guardei o Amor", artista: "Nando Reis & Ana Cañas", arquivo: "assets/musicas/pra-voce-guardei-o-amor.mp3" },
    { titulo: "Meu Abrigo", artista: "Melim", arquivo: "assets/musicas/meu-abrigo.mp3" },
    { titulo: "Amei Te Ver", artista: "Tiago Iorc", arquivo: "assets/musicas/amei-te-ver.mp3" },
    { titulo: "Ainda Bem", artista: "Marisa Monte", arquivo: "assets/musicas/ainda-bem.mp3" },
    { titulo: "Velha Infância", artista: "Tribalistas", arquivo: "assets/musicas/velha-infancia.mp3" },
    { titulo: "Ela Une Todas as Coisas", artista: "Jorge Vercillo", arquivo: "assets/musicas/ela-une-todas-as-coisas.mp3" },
    { titulo: "Final Feliz", artista: "Jorge Vercillo", arquivo: "assets/musicas/final-feliz.mp3" },
    { titulo: "Monalisa", artista: "Jorge Vercillo", arquivo: "assets/musicas/monalisa.mp3" },
    { titulo: "Que Nem Maré", artista: "Jorge Vercillo", arquivo: "assets/musicas/que-nem-mare.mp3" },
  ],

  // ----- Capítulos da nossa história -----
  // ⚠️ EDITE os títulos e textos como quiser. "fotos" são os números
  // dos arquivos assets/fotos/foto-NN.jpeg destacados em cada capítulo.
 capitulos: [
  {
    numero: "Capítulo I",
    titulo: "Onde Tudo Começou",
    texto:
      "No dia 23 de julho de 2017, sem saber, eu vivi um dos dias mais importantes da minha vida. " +
      "Foi ali que Deus, o destino e o amor começaram a escrever a nossa história. " +
      "Eu ainda não imaginava tudo que viveríamos, mas hoje eu sei: naquele dia eu encontrei você.",
    fotos: [1, 2, 3, 4],
    efeito: "polaroid",
  },
  {
    numero: "Capítulo II",
    titulo: "Entre Risos e Olhares",
    texto:
      "Com você, os momentos simples ganharam outro sentido. " +
      "Um sorriso, uma conversa, um abraço ou até ficar sem fazer nada ao seu lado " +
      "se tornaram lembranças que eu guardo com carinho no coração.",
    fotos: [31, 32, 33, 34],
    efeito: "cascata",
  },
  {
    numero: "Capítulo III",
    titulo: "Cumplicidade",
    texto:
      "Aos poucos, deixamos de ser apenas duas pessoas apaixonadas e nos tornamos um time. " +
      "Passamos por dias leves, dias difíceis, planos, sonhos e desafios. " +
      "E em todos eles eu tive ainda mais certeza de que é você quem eu quero ao meu lado.",
    fotos: [43, 44, 45, 46],
    efeito: "zoom",
  },
  {
    numero: "Capítulo IV",
    titulo: "Nossa Celebração",
    texto:
      "Te ver ali, vivendo comigo um dos momentos mais lindos da nossa história, " +
      "foi algo que eu nunca vou esquecer. Você estava perfeita. " +
      "E eu só conseguia pensar no quanto sou abençoado por chamar você de minha.",
    fotos: [61, 62, 63, 64],
    efeito: "polaroid",
  },
  {
    numero: "Capítulo V",
    titulo: "Para Sempre Nós",
    texto:
      "Depois de tudo que já vivemos, eu olho para a nossa história com gratidão. " +
      "Mas olho para o futuro com ainda mais amor. Porque, se depender de mim, " +
      "essa história ainda terá muitos capítulos, muitas conquistas e uma vida inteira de nós dois.",
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
      opcoes: ["14/02/2017", "23/07/2017", "12/06/2018", "23/07/2016"],
      correta: 1,
    },
    {
      pergunta: "Qual dessas músicas está na trilha sonora da nossa vida?",
      opcoes: ["Evidências", "Meu Abrigo – Melim", "Fico Assim Sem Você", "Jorge Vercillo - Ela Une Todas As Coisas"],
      correta: 3,
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
  "Minha Sarah, minha Mademoiselle,\n\n" +
  "Hoje eu poderia te dar apenas uma carta, uma música ou uma lembrança. " +
  "Mas eu queria fazer algo que tivesse um pedacinho da nossa história, " +
  "porque tudo que vivemos até aqui merece ser lembrado com carinho.\n\n" +

  "Desde o dia 23 de julho de 2017, minha vida começou a ganhar novas cores. " +
  "Você chegou de um jeito especial e, pouco a pouco, foi se tornando meu lugar favorito no mundo. " +
  "Com você, eu aprendi que amor de verdade não está só nos grandes momentos, " +
  "mas também nos detalhes: no cuidado, na parceria, nas risadas, nos abraços e até nos silêncios tranquilos.\n\n" +

  "Você é minha companheira, minha melhor amiga, meu amor e minha escolha de todos os dias. " +
  "A pessoa com quem eu quero dividir os sonhos, as conquistas, os planos e até os desafios. " +
  "Porque quando estou com você, tudo fica mais leve, mais bonito e mais certo.\n\n" +

  "Obrigado por caminhar comigo, por me amar, por ser quem você é e por fazer parte da minha vida de uma forma tão única. " +
  "Eu tenho muito orgulho da nossa história e ainda mais esperança em tudo que vamos construir juntos.\n\n" +

  "Que este Dia dos Namorados seja só mais uma página bonita dentro de um livro enorme que ainda vamos escrever. " +
  "E que, em todos os próximos capítulos, continue sendo eu e você. Sempre nós.\n\n" +

  "Eu te amo mais do que consigo colocar em palavras.\n\n" +
  "Para sempre seu,\nJefferson",

  assinaturaCarta: "12 de junho de 2026",
};
