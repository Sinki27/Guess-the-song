// Seleciona o elemento que você deseja alterar
//const telaHeigh = document.querySelector('.resultados-pesquisa');

function ajustarAltura() {
    if (window.innerWidth <= 425) {
      telaHeigh.style.height = '26vh'; // Altera o height para 40vh
      
    } else {
      telaHeigh.style.height = '50vh'; // Altera o height para 26vh (valor padrão ou outro valor desejado)
    }
}

// Chama a função inicialmente para ajustar a altura na primeira carga da página
ajustarAltura();

// Adiciona um event listener para ajustar a altura sempre que a janela for redimensionada
window.addEventListener('resize', ajustarAltura);