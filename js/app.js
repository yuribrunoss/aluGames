let jogosAlugados = 0;

function contarExibirJogosAlugados() {
   console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(num){
    
    let gameClicado = document.getElementById(`game-${num}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');


    if (imagem.classList.contains('dashboard__item__img--rented')) {

         if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            
            imagem.classList.remove('dashboard__item__img--rented');
           
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
         
            jogosAlugados--;

         }

     } else {
  
        imagem.classList.add('dashboard__item__img--rented');

        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver";

        jogosAlugados++;

     }

     contarExibirJogosAlugados();

}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
   jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
   contarEExibirJogosAlugados();
});


function ordenarNumeros(a, b, c) {
   const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
   console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"