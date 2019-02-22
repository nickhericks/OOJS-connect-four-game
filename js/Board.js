class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /**
   * Generates 2D array of spaces.
   * @return  {Array}     An array of space objects
   */
  createSpaces() {
    const spaces = [];
    // For each column, create a column array and add it to the spaces array
    for(let x = 0; x < this.columns; x++) {
      const column = [];
      // For each row, create a space and add it to the column array
      for(let y = 0; y < this.rows; y++) {
        const space = new Space(x, y);
        column.push(space);
      }
      // Add each column array to the spaces array
      spaces.push(column);
    }
    return spaces;
  }



  drawHTMLBoard() {
    for (let column of this.spaces) {
      for (let space of column) {
        space.drawSVGSpace();
      }
    }
  }










}
