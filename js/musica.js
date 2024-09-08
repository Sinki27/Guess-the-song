function sortearMusica() {
    console.log('rodou')
    // Obtém o índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * dadosMusicas.length);
  
    // Retorna a música sorteada
    return dadosMusicas[indiceAleatorio];
}


// function aletorizar() {
//     let novaMusicaSorteada = sortearMusica();
//     musicaSorteada = novaMusicaSorteada;
//     const musicaSorteada = sortearMusica();
//     console.log(musicaSorteada);
//     return musicaSorteada; // Retorna a música sorteada para possível uso posterior
// }

let section = document.querySelector(".resultados-pesquisa");

function trocarMusica() {
    section.innerHTML =`
        <div class="item-resultado responsivoHome">
            <h2> Vamos partir para outra!!</h2>
            
            <button onclick="reload()">Jogar Novamente</button>
        </div>
        `
        botaoT.classList.add('desativado');
}

function reload() {
    window.location.reload();
}

// Exemplo de uso:
let musicaSorteada = sortearMusica();
//novaMusicaSorteada = aletorizar();
console.log(musicaSorteada); // Imprime o caminho da música sorteada

function dica() {
    resposta = prompt('Temos a opção de dica de cantor/banda(1), ano de lançamento(2), genero(3)? Digite o numero da dica que você deseja!')
    if (resposta == 1 ) {
        alert(`Cantor ou Banda: ${musicaSorteada.cantor}`)
    } else if (resposta == 2 ) {
        alert(`Ano de Lançamento: ${musicaSorteada.anos}`)
    } else if (resposta == 3 ) {
        alert(`Genero da Musica: ${musicaSorteada.genero}`)
    } else {
        alert('Por favor digite uma opção valida!')
    }
}

const inputMusica = document.querySelector('#alternar-musica');

let musica = new Audio(musicaSorteada.musica);

musica.loop = true;

inputMusica.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})