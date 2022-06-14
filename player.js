class Player {
  constructor(name) {
    this.wins = 0;
    this.choice = ''
  }

  setComputerChoice() {
    if (game.game === 'spicyGame') {
      game.computer.choice = spicyGame[this.generatePick(spicyGame)]
    } else if (game.game === 'normalGame') {
      game.computer.choice = normalGame[this.generatePick(normalGame)]
    }
  }

  generatePick(array) {
    return Math.floor(Math.random() * array.length)
  }

  winCount() {
    this.wins++
  }
}
