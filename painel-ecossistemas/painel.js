function carregarConteudo(bioma) {
    const conteudo = document.getElementById('conteudo');
    fetch("./biomas.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados carregados:", data);
        conteudo.innerHTML = `<h2>${data.biomas[bioma].nome}</h2>
                          <div class="descricao">${data.biomas[bioma].descricao}</div>`;
      })
      .catch((error) => {
        console.error("Erro ao carregar o arquivo biomas.json:", error);
      });
}
