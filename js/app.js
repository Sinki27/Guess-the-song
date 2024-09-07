const botaoJ = document.querySelector('.botaoJ');
const botaoT = document.querySelector('.botaoT');
const homeRegras = document.querySelector('.regras');
const musicaTocar = document.querySelector('.musicaTocar');
const telaHeigh = document.querySelector('.resultados-pesquisa');
  
botaoJ.addEventListener('click', () => {
    musicaTocar.classList.remove('desativado');
    musicaTocar.classList.add('ativado');
    homeRegras.classList.remove('ativado');
    homeRegras.classList.add('desativado');
    telaHeigh.style.height = '66vh';
    botaoJ.classList.add('desativado');
    botaoT.classList.remove('desativado')
    botaoT.classList.add('ativado');
})

botaoT.addEventListener('click', () => {
    musicaTocar.classList.remove('ativado');
    musicaTocar.classList.add('desativado');
    homeRegras.classList.remove('desativado');
    homeRegras.classList.add('ativado');
    telaHeigh.style.height = '26vh';
    botaoT.classList.add('desativado');
    botaoJ.classList.remove('desativado')
    botaoJ.classList.add('ativado');
})

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.querySelector(".resultados-pesquisa");

    let campoPesquisa = musicaSorteada.nome.toLowerCase();

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = '<p class="resultados-pesquisa-nada-encontrado">Nada foi encontrado. Você precisa digitar o nome de uma musica</p>'
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">Banda ou cantor: ${dado.banda}</p>
                <a href=${dado.link} target="_blank">Para mais informações que tal pesquisar no Gemini 😎</a>
            </div>
            <button onclick="reload()">Voltar a tela inicial</button>
        `;
        }
    }

    if (!resultados) {
        resultados = '<p class="resultados-pesquisa-nada-encontrado">Nada foi encontrado</p>'
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}