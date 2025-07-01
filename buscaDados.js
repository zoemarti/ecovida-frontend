function buscarBiomas(idResultado) {
    const urlBiomas = 'https://sample-python-api-eta.vercel.app/api/biomas';
    fetch(urlBiomas)
        .then(response => response.json())
        .then(data => {
            let resultado = document.getElementById(idResultado);
            resultado.innerHTML = "";
            data.biomas.forEach(element => {
              let item = document.createElement("li");
              item.textContent = element.nome + " - " + element.descricao;
              resultado.appendChild(item);
            });
        });
}
