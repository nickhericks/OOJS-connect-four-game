class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }



  /**
   * Gets all tokens that have not been dropped
   * @returns   {array}     Array of all the player's unused tokens
  **/
  get unusedTokens() {
    return this.tokens.filter(token => !token.dropped);
  }

  /**
   * Gets the active token
   * @returns   {Object}     First token in the array of unusedTokens.
  **/
  get activeToken() {
    return this.unusedTokens[0];
  }





  /**
   * Creates token objects for player
   * @param     {number}    num - Number of token objects to be created
   * @returns   {Array}     An array of the newly created token objects
  **/
  createTokens(num) {
    const tokens = [];

    for(let i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;
  }













}
