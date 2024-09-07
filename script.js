// Função para pesquisar um jogador e exibir os resultados na página
function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campo_pesquisa = document.getElementById("campo-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";

  // Itera sobre cada jogador no array de jogadores
  for (let dados of jogador) {
    // Cria uma nova div para cada jogador encontrado
    resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dados.nome}</a>
          </h2>
          <p class="discricao-meta">
            ${dados.descricao}
          </p>
          <a href="${dados.link}" target="_blank" rel="external">
            Mais Informações sobre - ${dados.nome}
          </a>
        </div>
      `;
  }

  // Atribui a string com os resultados ao conteúdo da seção
  section.innerHTML = resultados;
}
