const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const sizeInput = document.getElementById('size');
const changeGridSize = document.getElementById('change-size');
const scoreLabel = document.getElementById('score');

const startScreen = document.getElementById('startScreen');
const gameArea = document.querySelector(".gameArea");
const sizebloc = document.querySelector(".size-bloc");

// console.log(gameArea);
// console.log(startScreen);

//  startScreen.addEventListener('click', startGame);

 startScreen.onclick = function () {
  startGame();
}

var score = 0;
var size = 4;
var width = canvas.width / size - 6;

var cells = [];
var fontSize;
var loss = false;

var base =2;

changeGridSize.onclick = function () {
  base=document.getElementById('base').value*1;
  if (sizeInput.value >= 2 && sizeInput.value <= 20) {
    size = sizeInput.value;
    width = canvas.width / size - 6;
    canvasClean();
    startGame();
  }
}

function cell(row, coll) {
  this.value = 0;
  this.x = coll*width + 5 * (coll);
  this.y = row* width + 5 * (row );
}

function createCells() {
  var i, j;
  for(i = 0; i < size; i++) {
    cells[i] = [];
    for(j = 0; j < size; j++) {
      cells[i][j] = new cell(i, j);
    }
  }
}

function canvasClean() {
  ctx.clearRect(0, 0, 500, 500);
}

document.onkeydown = function (event) {
  if (!loss) {
    if (event.keyCode === 38 || event.keyCode === 87) {
      moveUp(); 
    } else if (event.keyCode === 39 || event.keyCode === 68) {
      moveRight();
    } else if (event.keyCode === 40 || event.keyCode === 83) {
      moveDown(); 
    } else if (event.keyCode === 37 || event.keyCode === 65) {
      moveLeft(); 
    }
    scoreLabel.innerHTML = 'Score : ' + score;
  }
}

function audio(path)
{
    var audio = new Audio(path);
    audio.play();
}

function startGame() {
  // gameArea.classList.remove('hide');
  sizebloc.classList.remove('hide');
  startScreen.classList.add('hide');
  audio('music/start.mp3');


  createCells();
  drawAllCells();
  pasteNewCell();
  pasteNewCell();
}

function finishGame() {
  canvas.style.opacity = '0.5';
  loss = true;
  startScreen.classList.remove('hide');
  startScreen.innerHTML= "GAME OVER !! <br> Your Final Score is <br>" + score ;
  audio('music/gameover.wav');
}
