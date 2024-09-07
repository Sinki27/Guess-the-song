function validar() {
    //const numeroDeChutes = chute

    let section = document.querySelector(".resultados-pesquisa");

    let chute = document.getElementById("campo-pesquisa").value

    if (!chute) {
        alert ('Nada foi encontrado. Você precisa digitar uma musica')
        return 
    }

    chute = chute.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let nome = musicaSorteada.nome.toLowerCase(); 

    // Itera sobre cada dado da lista de dados
    //for (let dado of musicaSorteada.nome) {
        console.log(nome)
        // se titulo includes campoPesquisa
        if (nome.includes(chute)) {
            console.log('Você acertou')
            section.innerHTML =`
                <div class="item-resultado">
                    <h2> Você acertou!!</h2>
                        <h3>O nome da musica é <label class="campo-pesquisa_valor">${nome.toUpperCase()}</label></h3>
            
                    <button onclick="reload()">Jogar Novamente</button>
                    <button onclick="pesquisar()">Para saber mais da Musica</button>
                </div>
                `
                botaoT.classList.add('desativado'); 
        } else {
            if (!(nome.includes(chute))) {
                alert('Errado!')
            }
            return
        }
   // }
    
    if (chuteForInvalido(chute)) {
        section.innerHTML += '<div> Valor inválido </div>'
        return
    }
}
    
function chuteForInvalido(chute) {
    Number.isNaN(chute)
}
    
document.body.addEventListener('click', e => {
    if(e.target.id =='jogar-novamente') {
        window.location.reload()
    }
})
    
function gamerOver(chute) {
    if (chute === "game over") {
        document.body.innerHTML =`
            <h2> Você Desistiu!!</h2>
            <h3>O nome da musica era ${dado.nome.toLowerCase()} <br> Caso queira jogar novamente aperte abaixo!!</h3>
    
            <button id="jogar-novamente">Jogar Novamente</button>
        `
        // document.body.style.backgroundColor = "Gray";
    }
}