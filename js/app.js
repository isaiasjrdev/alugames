function alterarStatus(id) {
   let gameClicaco = document.getElementById(`game-${id}`);
   let imagem = gameClicaco.querySelector('.dashboard__item__img');
   let botao = gameClicaco.querySelector('.dashboard__item__button');
   
   if (imagem.classList.contains('dashboard__item__img--rented')) {
      imagem.classList.remove('dashboard__item__img--rented')
   } else {
      imagem.classList.add('dashboard__item__img--rented')
   }

}