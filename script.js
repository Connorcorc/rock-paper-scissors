var game = new Game();

var normalGame = ['rock', 'paper', 'scissors'];
var spicyGame = ['rock', 'paper', 'scissors', 'lizard', 'alien']

var classicBox = document.querySelector('.image-body-one')
var hardBox = document.querySelector('.image-body-two')
var imageBox = document.querySelector('.image-body-choice')
var imageBoxTwo = document.querySelector('.image-body-choice-two')
var changeGame = document.querySelector('.change-game')
var mainOutput = document.querySelector('.header-one')
var output = document.querySelector('.sub-header-one')
var playerWins = document.querySelector('.player-wins')
var computerWins = document.querySelector('.computer-wins')
var fight = document.querySelector('.fight-scene')

classicBox.addEventListener('click', changeMainBox);
hardBox.addEventListener('click', changeHardBox);
imageBox.addEventListener('click', runGame)
imageBoxTwo.addEventListener('click', runGame)
changeGame.addEventListener('click', resetGameButton)


function changeMainBox() {
  mainOutput.innerHTML = 'Choose your fighter!'
  output.innerHTML = ''
  game.game = 'normalGame'
  classicBox.classList.add('hidden');
  hardBox.classList.add('hidden');
  imageBox.classList.remove('hidden')
  changeGame.classList.remove('hidden')
}

function changeHardBox() {
  mainOutput.innerHTML = 'Choose your fighter!'
  game.game = 'spicyGame'
  output.innerHTML = ''
  classicBox.classList.add('hidden');
  hardBox.classList.add('hidden');
  imageBoxTwo.classList.remove('hidden')
  changeGame.classList.remove('hidden')
}

function resetGameButton() {
  mainOutput.innerHTML = 'Rock, Paper, Scissors'
  output.innerHTML = 'Choose your game';
  classicBox.classList.remove('hidden');
  hardBox.classList.remove('hidden');
  imageBoxTwo.classList.add('hidden')
  imageBox.classList.add('hidden')
  changeGame.classList.remove('hidden')
}

function reset() {
  if (game.game === 'normalGame') {
    changeMainBox();
  } else {
    changeHardBox();
  }
  fight.innerHTML = ``;
}

function updateScore() {
  playerWins.innerHTML = `Wins: ${game.player.wins}`;
  computerWins.innerHTML = `Wins: ${game.computer.wins}`;
}

function runGame() {
  game.player.choice = event.target.id;
  game.computer.setComputerChoice();
  game.checkForWin();
  game.checkForDraw();
  game.winTally();
  fightScene();
  updateScore();
  setTimeout(reset, 3000)
}

function fightScene() {
  imageBox.classList.add('hidden')
  imageBoxTwo.classList.add('hidden')
  fight.innerHTML = `
  <img src="./rock-paper-scissors-assets/${game.player.choice}.png" class="img" alt="${game.player.choice}"/>
  <img src="./rock-paper-scissors-assets/${game.computer.choice}.png" class="img" alt="${game.computer.choice}"/>
  `
  if (game.playerWins === true) {
    output.innerHTML = 'Player wins!'
  } else if(game.playerWins === false) {
    output.innerHTML = 'Computer wins!'
  }
}
