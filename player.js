class Player {
  constructor(name, token) {
    this.wins = 0;
    this.token = token;
    this.choice = '';
  }

  setComputerChoice() {
    if (game.game === 'spicyGame') {
      game.computer.choice = spicyGame[this.generatePick(spicyGame)]
    } else if (game.game === 'normalGame') {
      game.computer.choice = normalGame[this.generatePick(normalGame)]
    }
    console.log(game.computer.choice)
  }

  generatePick(array) {
    return Math.floor(Math.random() * array.length);
  };

  // startGame() {
  //
  // }
  //
  winCount() {
    this.wins++;
  }
}
