

class Game {
  constructor(game) {
    this.game = game;
    this.gameIcons = [];
    this.player = new Player('Player 1')
    this.computer = new Player('Computer');
    this.playerWins = false;
  }

  playerChoice() {
    if(this.category === 'CLASSIC') {
      this.gameIcons = ['rock', 'paper', 'scissors']
    } else if (this.category = 'DIFFICULT') {
      this.gameIcons = ['rock', 'paper', 'scissors', 'lizard', 'aliens']
    }
  }

  runGame() {
    if (this.player.choice === 'rock' && (this.computer.choice === 'scissors' || this.computer.choice === 'lizard')) {
      this.playerWins = true;
      output.innerHTML = 'Player wins!'
      this.player.winCount();
      // this.computer.winCount()
    } else if (this.player.choice === 'paper' && (this.computer.choice === 'rock' || this.computer.choice === 'alien')) {
      this.playerWins = true;
      output.innerHTML = 'Player wins!'
      this.player.winCount();
    } else if (this.player.choice === 'scissors' && (this.computer.choice === 'paper' || this.computer.choice === 'lizard')) {
      this.playerWins = true;
      output.innerHTML = 'Player wins!'
      this.player.winCount();
    } else if (this.player.choice === 'lizard' && (this.computer.choice === 'paper' || this.computer.choice === 'alien')) {
      this.playerWins = true;
      output.innerHTML = 'Player wins!'
      this.player.winCount();
    } else if (this.player.choice === 'alien' && (this.computer.choice === 'scissors' || this.computer.choice === 'rock')) {
      this.playerWins = true;
      output.innerHTML = 'Player wins!'
      this.player.winCount();
    } else {
      this.computer.playerWins = false;
      output.innerHTML = 'Computer wins!'
      this.computer.winCount();
    }
  }

  checkForDraw() {
    if (this.computer.choice === this.player.choice) {
      output.innerHTML = 'DRAW!'
    }
  }


}
