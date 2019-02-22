
const startButton = document.querySelector('#begin-game');





  const newGame = new Game();
  console.log(newGame);
  console.log(newGame.board);
  console.log(newGame.players);
  console.log(newGame.ready);



/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
startButton.addEventListener('click', function() {

  newGame.startGame();

  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';

});
