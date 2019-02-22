class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  /**
   * Gets associated htmlToken
   * @returns   {object}     Player object whos active property is true
  **/
  get activePlayer() {
    return this.players.find(player => player.active);
  }

  /**
   * Creates two player objects
   * @return  {Array}    An array of two Player objects.
   */
  createPlayers() {
    const players = [new Player('Nick', 1, '#e15258', true),
                     new Player('Ashley', 2, '#e59a13')];
    return players;
  }

  /**
   * Initializes game.
   */
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }


  /**
   * Branches code, depending on what key player presses
   * @param   {Object}    e - Keydown event object
   */
  handleKeydown(e) {
    if(this.ready === true) {
      if(e.key === 'ArrowLeft') {
        console.log(e.key);
        // Move active token left
        this.activePlayer.activeToken.moveLeft();
      } else if (e.key === 'ArrowRight') {
        console.log(e.key);
        // Move active token right
        this.activePlayer.activeToken.moveRight(this.board.columns);
      } else if (e.key === 'ArrowDown') {
        console.log(e.key);
        // Drop active token
        this.playToken();
      }
    }
  }

  /**
   * Finds Space object to drop Token into, drops Token
   */
  playToken(){
    let spaces = this.board.spaces;
    let activeToken = this.activePlayer.activeToken;
    let targetColumn = spaces[activeToken.columnLocation];
    let targetSpace = null;

    for(let space of targetColumn) {
      if(space.token === null) {
        targetSpace = space;
      }
    }

    if(targetSpace !== null) {
      game.ready = false;
      activeToken.drop(targetSpace);
    }
  }



}
