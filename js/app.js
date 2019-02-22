
const startButton = document.querySelector('#begin-game');
const game = new Game();



console.log(game);
console.log(game.board);
console.log(game.players);
console.log(game.ready);


/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
startButton.addEventListener('click', function() {

  game.startGame();

  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';

  console.log(game);
});

/**
 * Listen for keyboard presses
 */
document.addEventListener('keydown', function(event) {
  game.handleKeydown(event);
});
