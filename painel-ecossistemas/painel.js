

function esconderTodos() {
  const descricoes = document.querySelectorAll('.descricao > div');
  descricoes.forEach(div => {
    div.style.display = 'none';
  });
}

function mostrarDescricao(biomaClass) {
  esconderTodos();
  const biomaDescricao = document.querySelector(`.${biomaClass}`);
  if (biomaDescricao) {
    biomaDescricao.style.display = 'block';
  }
}

esconderTodos(); // Esconde todas as descrições inicialmente
