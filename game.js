class Game {
  constructor(game) {
    this.game = game;
    this.gameIcons = [];
    this.player = new Player('Player 1')
    this.computer = new Player('Computer');
    this.playerWins = undefined;
  }

  playerChoice() {
    if(this.category === 'CLASSIC') {
      this.gameIcons = ['rock', 'paper', 'scissors']
    } else if (this.category === 'DIFFICULT') {
      this.gameIcons = ['rock', 'paper', 'scissors', 'lizard', 'aliens']
    }
  }

  checkForWin() {
    if (this.player.choice === 'rock' && (this.computer.choice === 'scissors' || this.computer.choice === 'lizard')) {
      output.innerHTML = 'Player wins!'
      // return this.playerWins = true;
    } else if (this.player.choice === 'paper' && (this.computer.choice === 'rock' || this.computer.choice === 'alien')) {
      output.innerHTML = 'Player wins!'
      // return this.playerWins = true;
    } else if (this.player.choice === 'scissors' && (this.computer.choice === 'paper' || this.computer.choice === 'lizard')) {
      output.innerHTML = 'Player wins!'
      // return this.playerWins = true;
    } else if (this.player.choice === 'lizard' && (this.computer.choice === 'paper' || this.computer.choice === 'alien')) {
      output.innerHTML = 'Player wins!'
      // return this.playerWins = true;
    } else if (this.player.choice === 'alien' && (this.computer.choice === 'scissors' || this.computer.choice === 'rock')) {
      // output.innerHTML = 'Player wins!'
      return this.playerWins = true;
    } else {
      // output.innerHTML = 'Computer wins!'
      return this.playerWins = false;
    }
  }

  checkForDraw() {
    if (this.computer.choice === this.player.choice) {
      output.innerHTML = 'DRAW!'
      return this.playerWins = undefined;
    }
  }

  winTally() {
    if (this.playerWins === true) {
      this.player.winCount();
      playerWins.innerHTML = `Wins: ${this.player.wins}`;
    } else if (this.playerWins === false) {
      this.computer.winCount();
      computerWins.innerHTML = `Wins: ${this.computer.wins}`;
    }
  }
}
