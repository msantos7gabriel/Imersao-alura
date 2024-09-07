// Função para pesquisar um jogador e exibir os resultados na página
function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  // Obtém o valor da barra de pesquisa e o transforma em minúsculas e remove espaços extras
  let pesquisa = document.getElementById("pesquisa").value.toLowerCase().trim();

  // Inicializa um array para armazenar os índices dos jogadores que correspondem à pesquisa
  let resultado_pesquisa = [];
  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";

  // Itera sobre a lista de jogadores
  for (let i = 0; i < jogador.length; i++) {
    // Verifica se o nome, descrição ou tags do jogador contêm o termo pesquisado
    // Adiciona o índice do jogador ao array resultado_pesquisa se corresponder
    if (
      (jogador[i].nome.toLowerCase().includes(pesquisa) && pesquisa != "") ||
      (jogador[i].descricao.toLowerCase().includes(pesquisa) &&
        pesquisa != "") ||
      (jogador[i].tags.toLowerCase().includes(pesquisa) && pesquisa != "")
    ) {
      resultado_pesquisa.push(i);
    }
  }

  // Verifica se algum resultado foi encontrado
  if (resultado_pesquisa.length == 0) {
    // Exibe uma mensagem de "nenhum resultado encontrado" se a pesquisa não corresponder a nenhum jogador
    section.innerHTML = `<p>Nenhum resultado foi encontrado para a pesquisa "${pesquisa}".</p>`;
    return; // Interrompe a função se não houver resultados
  }

  // Itera sobre os índices dos jogadores que corresponderam à pesquisa
  for (let i = 0; i < resultado_pesquisa.length; i++) {
    // Constrói o HTML para cada jogador correspondente
    resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#">${jogador[resultado_pesquisa[i]].nome}</a>
        </h2>
        <p class="discricao-meta">
          ${jogador[resultado_pesquisa[i]].descricao}
        </p>
        <a href="${
          jogador[resultado_pesquisa[i]].link
        }" target="_blank" rel="external">
          Mais Informações sobre - ${jogador[resultado_pesquisa[i]].nome}
        </a>
      </div>
      `;
  }
  // Atribui a string com os resultados ao conteúdo da seção
  section.innerHTML = resultados;
}
