
const game = new Game();

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
document.querySelector('#begin-game').addEventListener('click', function() {
  // Initializes game
  game.startGame();
  // hides start button element
  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});

/**
 * Listen for keyboard presses
 */
document.addEventListener('keydown', function(event) {
  game.handleKeydown(event);
  console.log(event.key);
});


// console.log(game);
// console.log(game.board);
// console.log(game.players);
// console.log(game.ready);
