function carregarConteudo(bioma) {
    const conteudo = document.getElementById('conteudo');
    fetch('./biomas.json')
      .then(response => response.json())
      .then(data => {
        console.log('Arquivo biomas.json carregado com sucesso:', data);
      })
      .catch(error => {
        console.error('Erro ao carregar o arquivo biomas.json:', error);
      });
    conteudo.innerHTML = `<h2>${bioma}</h2>
                          <div class="descricao">Descrição do bioma ${bioma} com saiba mais</div>`;
}
