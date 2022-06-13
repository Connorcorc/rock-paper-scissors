var game = new Game();

var normalGame = ['rock', 'paper', 'scissors'];
var spicyGame = ['rock', 'paper', 'scissors', 'lizard', 'alien']

var classicBox = document.querySelector('.image-body-one')
var hardBox = document.querySelector('.image-body-two')
var imageBox = document.querySelector('.image-body-choice')
var imageBoxTwo = document.querySelector('.image-body-choice-two')
var resetGame = document.querySelector('.reset-game')
var output = document.querySelector('.sub-header-one')

classicBox.addEventListener('click', changeMainBox);
hardBox.addEventListener('click', changeHardBox);
imageBox.addEventListener('click', pickFighter)
imageBoxTwo.addEventListener('click', pickFighter)
resetGame.addEventListener('click', resetGameButton)

// function show(element) {
//   element.classList.remove('hidden');
// };
//
// function hide(element) {
//   element.classList.add('hidden');
// };

function changeMainBox() {
  game.game = 'normalGame'
  classicBox.classList.add('hidden');
  hardBox.classList.add('hidden');
  imageBox.classList.remove('hidden')
  resetGame.classList.remove('hidden')
}

function changeHardBox() {
  game.game = 'spicyGame'
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
  output.innerHTML = 'Choose your game'
}

function pickFighter() {
  game.player.choice = event.target.id;
  game.computer.setComputerChoice();
  game.runGame()
  game.checkForDraw();
  console.log(game.player.choice)
}
