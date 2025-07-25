const ecossistemas = {
  amazonia: {
    descricao: {
      titulo: "Floresta Amazônica",
      texto:
        "A maior floresta tropical do mundo, rica em biodiversidade e essencial para o equilíbrio climático global.",
      img: "../img/amazonia.jpg",
    },
    especies: [
      {
        nome: "Onça-pintada",
        cientifico: "Panthera onca",
        status: "Quase ameaçada",
        curiosidade: "Maior felino das Américas.",
        img: "../img/animais/onca-pintada.png",
      },
      {
        nome: "Bicho-preguiça",
        cientifico: "Bradypus variegatus",
        status: "Pouco preocupante",
        curiosidade: "Dormem até 20 horas por dia!",
        img: "../img/animais/bicho-preguica.png",
      },
    ],
  },

  cerrado: {
    descricao: {
      titulo: "Cerrado",
      texto:
        "O segundo maior bioma do Brasil, conhecido por sua vegetação retorcida, nascentes e diversidade de aves.",
      img: "../img/cerrado.jpg",
    },
    especies: [
      {
        nome: "Lobo-guará",
        cientifico: "Chrysocyon brachyurus",
        status: "Quase ameaçado",
        curiosidade: "Tem pernas longas e aparência de raposa.",
        img: "../img/animais/lobo-guara.png",
      },
      {
        nome: "Tamanduá-bandeira",
        cientifico: "Myrmecophaga tridactyla",
        status: "Vulnerável",
        curiosidade: "Pode comer até 30 mil formigas por dia!",
        img: "../img/animais/tamandua-bandeira.png",
      },
    ],
  },

  "mata-atlantica": {
    descricao: {
      titulo: "Mata atlantica",
      texto:
        "O segundo maior bioma do Brasil, conhecido por sua vegetação retorcida, nascentes e diversidade de aves.",
      img: "../img/mataatlantica.png",
    },
    especies: [
      {
        nome: "Mico-leão-dourado",
        cientifico: "Leontopithecus rosalia",
        status: "Em perigo (EN) – segundo a Lista Vermelha da IUCN.",
        curiosidade:
          "Cada mico-leão-dourado vive em grupos familiares e passa a maior parte do tempo em árvores, podendo dar saltos de até 3 metros entre galhos.",
        img: "../img/animais/mico-leao-dourado.png",
      },
      {
        nome: "Capivara",
        cientifico: "Hydrochoerus hydrochaeris",
        status: "Pouco preocupante (LC)",
        curiosidade:
          "É o maior roedor do mundo, podendo pesar mais de 60 kg, e é um excelente nadador, usando a água para fugir de predadores.",
        img: "../img/animais/capivara.png",
      },
    ],
  },

  caatinga: {
    descricao: {
      titulo: "Caatinga",
      texto:
        "A Caatinga é um bioma exclusivamente brasileiro, caracterizado por clima semiárido, longos períodos de seca e vegetação adaptada, como cactos e arbustos espinhosos. Apesar de parecer árido, abriga uma biodiversidade rica e espécies únicas que se adaptaram às condições extremas do sertão.",
      img: "../img/caatinga.jpg",
    },
    especies: [
      {
        nome: "Preá",
        cientifico: "Cavia aperea",
        status: "Pouco preocupante (LC)",
        curiosidade:
          "É um pequeno roedor nativo do Brasil que vive em grupos e escava tocas para se proteger de predadores e do calor intenso da Caatinga.",
        img: "../img/animais/prea.png",
      },
      {
        nome: "Tatu-peba",
        cientifico: "Euphractus sexcinctus",
        status: "Pouco preocupante (LC)",
        curiosidade:
          "É um tatu que consegue cavar tocas rapidamente, ajudando na sua sobrevivência em áreas de solo arenoso e seco da Caatinga.",
        img: "../img/animais/tatu-peba.png",
      },
    ],
  },

  pampa: {
    descricao: {
      titulo: "Pampa",
      texto:
        "O Pampa é um bioma caracterizado por extensas planícies de campos naturais, com vegetação rasteira e clima subtropical, predominante no sul do Brasil. É rico em biodiversidade, abrigando diversas espécies de animais adaptados aos campos abertos.",
      img: "../img/pampa.jpg",
    },
    especies: [
      {
        nome: "Veado campeiro",
        cientifico: "Ozotoceros bezoarticus",
        status: "Quase ameaçado (NT)",
        curiosidade:
          "É um cervídeo típico dos campos abertos do Pampa, que vive em grupos pequenos e se alimenta de gramíneas e folhas.",
        img: "../img/animais/veado-campeiro.png",
      },
      {
        nome: "Gavião-carcará",
        cientifico: "Caracara plancus",
        status: "Pouco preocupante (LC)",
        curiosidade:
          "É uma ave de rapina comum no Pampa, conhecida por sua habilidade de se alimentar tanto de presas vivas quanto de carniça.",
        img: "../img/animais/gaviao-carcara.png",
      },
    ],
  },

  pantanal: {
    descricao: {
      titulo: "Pantanal",
      texto:
        "O Pantanal é a maior planície alagável do mundo, localizada principalmente no Brasil, com uma biodiversidade extraordinária, incluindo centenas de espécies de peixes, aves, mamíferos e répteis adaptados aos ciclos de cheia e seca.",
      img: "../img/pantanal.jpg",
    },
    especies: [
      {
        nome: "Jacaré-do-Pantanal",
        cientifico: "Caiman yacare",
        status: "Pouco preocupante (LC)",
        curiosidade:
          "É um dos jacarés mais comuns do Pantanal, capaz de nadar longas distâncias e sobreviver aos períodos de seca em tocas subterrâneas.",
        img: "../img/animais/jacare.png",
      },
      {
        nome: "Arara-azul",
        cientifico: "Anodorhynchus hyacinthinus",
        status: "Vulnerável (VU)",
        curiosidade:
          "É a maior arara do mundo e possui uma plumagem azul vibrante; vive em casais ou pequenos grupos nas matas do Pantanal.",
        img: "../img/animais/arara-azul.png",
      },
    ],
  },
  // Adicione mais ecossistemas...
};

let slideAtual = 0;
let ecossistemaAtual = "";

function abrirPainel(nome) {
  ecossistemaAtual = nome;
  slideAtual = -1; // Inicia na descrição
  mostrarSlide();
}

function mostrarSlide() {
  const dados = ecossistemas[ecossistemaAtual];
  const card = document.getElementById("card");

  let html = "";

  if (slideAtual === -1) {
    // Slide de introdução do ecossistema
    html = `
      <div class="card-slide active">
        <img src="${dados.descricao.img}" alt="${dados.descricao.titulo}">
        <h2>${dados.descricao.titulo}</h2>
        <p>${dados.descricao.texto}</p>
      </div>
      <div class="slide-buttons">
        <button onclick="navegar(-1)">◀️</button>
        <button onclick="navegar(1)">▶️</button>
      </div>
    `;
  } else {
    // Slide das espécies
    const especie = dados.especies[slideAtual];
    html = `
      <div class="card-slide active">
        <img src="${especie.img}" alt="${especie.nome}">
        <h2>${especie.nome}</h2>
        <p><em>${especie.cientifico}</em></p>
        <p>Status: ${especie.status}</p>
        <p>${especie.curiosidade}</p>
      </div>
      <div class="slide-buttons">
        <button onclick="navegar(-1)">◀️</button>
        <button onclick="navegar(1)">▶️</button>
      </div>
    `;
  }

  card.innerHTML = html;
}

function navegar(direcao) {
  const totalSlides = ecossistemas[ecossistemaAtual].especies.length;
  slideAtual += direcao;

  if (slideAtual < -1) slideAtual = totalSlides - 1;
  if (slideAtual >= totalSlides) slideAtual = -1;

  mostrarSlide();
}
