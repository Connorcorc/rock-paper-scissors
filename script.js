var game = new Game();

var normalGame = ['rock', 'paper', 'scissors'];
var spicyGame = ['rock', 'paper', 'scissors', 'lizard', 'alien']

var classicBox = document.querySelector('.image-body-one')
var hardBox = document.querySelector('.image-body-two')
var imageBox = document.querySelector('.image-body-choice')
var imageBoxTwo = document.querySelector('.image-body-choice-two')
var resetGame = document.querySelector('.reset-game')
var mainOutput = document.querySelector('.header-one')
var output = document.querySelector('.sub-header-one')
var playerWins = document.querySelector('.player-wins')
var computerWins = document.querySelector('.computer-wins')
var fight = document.querySelector('.fight-scene')

classicBox.addEventListener('click', changeMainBox);
hardBox.addEventListener('click', changeHardBox);
imageBox.addEventListener('click', runGame)
imageBoxTwo.addEventListener('click', runGame)
resetGame.addEventListener('click', resetGameButton)


function changeMainBox() {
  mainOutput.innerHTML = 'Choose your fighter!'
  output.innerHTML = ''
  game.game = 'normalGame'
  classicBox.classList.add('hidden');
  hardBox.classList.add('hidden');
  imageBox.classList.remove('hidden')
  resetGame.classList.remove('hidden')
}

function changeHardBox() {
  mainOutput.innerHTML = 'Choose your fighter!'
  game.game = 'spicyGame'
  output.innerHTML = ''
  classicBox.classList.add('hidden');
  hardBox.classList.add('hidden');
  imageBoxTwo.classList.remove('hidden')
  resetGame.classList.remove('hidden')
}

function resetGameButton() {
  classicBox.classList.remove('hidden');
  hardBox.classList.remove('hidden');
  imageBoxTwo.classList.add('hidden')
  imageBox.classList.add('hidden')
  resetGame.classList.add('hidden')
  output.innerHTML = 'Choose your game';
}

function reset() {
  if (game.game === 'normalGame') {
    changeMainBox();
  } else {
    changeHardBox();
  }
  fight.innerHTML = ``;
}

function runGame() {
  game.player.choice = event.target.id;
  game.computer.setComputerChoice();
  game.checkForWin();
  game.checkForDraw();
  game.winTally();
  fightScene();
  setTimeout(reset, 3000)
}

function fightScene() {
  imageBox.classList.add('hidden')
  imageBoxTwo.classList.add('hidden')
  fight.innerHTML = `
  <img src="./rock-paper-scissors-assets/${game.player.choice}.png" class="img" alt="${game.player.choice}"/>
  <img src="./rock-paper-scissors-assets/${game.computer.choice}.png" class="img" alt="${game.computer.choice}"/>
  `
}
