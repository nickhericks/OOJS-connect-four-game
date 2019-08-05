# Object-Oriented JavaScript Exercise - Full Stack JavaScript Techdegree

### OOJS Connect Four Game
This project uses Object-Oriented JavaScript to create an online version of a Connect Four game.

***
<!-- <!-- <img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1550234182/portfolio/interactive-form-1.png" width="400px"><img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1550218646/portfolio/screenshot-padding-github.png" width="50px"> -->
<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1565016790/portfolio/connect-four.png" width="899px">

## View project
:mag: Live version available at [nickhericks.github.io/OOJS-connect-four-game/](https://nickhericks.github.io/OOJS-connect-four-game/)

## Project objective
To complete this project I created JavaScript classes (Game, Board, Space, Player, Token) to organize the code. Each class, with its constructor function, methods, getters and setters is in its own .js file, and the app.js file handles the interaction with DOM elements.

## Techniques and concepts
- JavaScript classes used to create objects and organize code.

## Code example
```javascript
// Finds Space object to drop Token into, and drops Token.
playToken(){
  let spaces = this.board.spaces;
  let activeToken = this.activePlayer.activeToken;
  let targetColumn = spaces[activeToken.columnLocation];
  let targetSpace = null;
  //
  for(let space of targetColumn) {
    if(space.token === null) {
      targetSpace = space;
    }
  }

  if(targetSpace !== null) {
    const game = this;
    game.ready = false;
    activeToken.drop(targetSpace, function() {
      game.updateGameState(activeToken, targetSpace);
    });
  }
}
```

## Acknowledgements
This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:
