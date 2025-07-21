const ecossistemas = {
  amazonia: {
    descricao: {
      titulo: "Floresta Amazônica",
      texto: "A maior floresta tropical do mundo, rica em biodiversidade e essencial para o equilíbrio climático global.",
      img: "../img/amazonia.jpg"
    },
    especies: [
      {
        nome: "Onça-pintada",
        cientifico: "Panthera onca",
        status: "Quase ameaçada",
        curiosidade: "Maior felino das Américas.",
        img: "img/cerrado.jpg"
      },
      {
        nome: "Bicho-preguiça",
        cientifico: "Bradypus variegatus",
        status: "Pouco preocupante",
        curiosidade: "Dormem até 20 horas por dia!",
        img: "img/preguica.jpg"
      }
    ]
  },

  cerrado: {
  descricao: {
    titulo: "Cerrado",
    texto: "O segundo maior bioma do Brasil, conhecido por sua vegetação retorcida, nascentes e diversidade de aves.",
    img: "../img/cerrado.jpg"
  },
  especies: [
    {
      nome: "Lobo-guará",
      cientifico: "Chrysocyon brachyurus",
      status: "Quase ameaçado",
      curiosidade: "Tem pernas longas e aparência de raposa.",
      img: "img/lobo.jpg"
    },
    {
      nome: "Tamanduá-bandeira",
      cientifico: "Myrmecophaga tridactyla",
      status: "Vulnerável",
      curiosidade: "Pode comer até 30 mil formigas por dia!",
      img: "img/tamandua.jpg"
    }
  ]
},

mataatlantica: {
  descricao: {
    titulo: "Mata atlantica",
    texto: "O segundo maior bioma do Brasil, conhecido por sua vegetação retorcida, nascentes e diversidade de aves.",
    img: "../img/mataatlantica.jpg"
  },
  especies: [
    {
      nome: "Lobo-guará",
      cientifico: "Chrysocyon brachyurus",
      status: "Quase ameaçado",
      curiosidade: "Tem pernas longas e aparência de raposa.",
      img: "img/lobo.jpg"
    },
    {
      nome: "Tamanduá-bandeira",
      cientifico: "Myrmecophaga tridactyla",
      status: "Vulnerável",
      curiosidade: "Pode comer até 30 mil formigas por dia!",
      img: "img/tamandua.jpg"
    }
  ]
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
  const card = document.getElementById('card');

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