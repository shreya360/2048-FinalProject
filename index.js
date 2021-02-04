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

function drawCell(cell) {
  ctx.beginPath();
  ctx.rect(cell.x, cell.y, width, width);
  switch (cell.value){
//    case 0 :ctx.fillStyle = "#d6a3a3"; break;
        case 2 :ctx.fillStyle = "#FF5733"; break;
        case 4 :ctx.fillStyle = "#BDC81E"; break;
        case 8 :ctx.fillStyle = "#B133FF"; break;
        case 16 :ctx.fillStyle = "#1EC88C"; break;
        case 32 :ctx.fillStyle = "#F7950C"; break;
        case 64 :ctx.fillStyle = "#D64475"; break;
        case 128 :ctx.fillStyle = "#D644B4"; break;
        case 256 :ctx.fillStyle = "#00ff8d"; break;
        case 512 :ctx.fillStyle = "#D65E44"; break;
        case 1024 :ctx.fillStyle = "#CCD644"; break;
        case 2048 :ctx.fillStyle = "#8DD644"; break;
        case 4096 :ctx.fillStyle = "#25B772"; break;
        
        
        case 5 :ctx.fillStyle = "#FF5733"; break;
        case 10:ctx.fillStyle = "#BDC81E"; break;
        case 20 :ctx.fillStyle = "#B133FF"; break;
        case 40 :ctx.fillStyle = "#1EC88C"; break;
        case 80 :ctx.fillStyle = "#F7950C"; break;
        case 160 :ctx.fillStyle = "#D64475"; break;
        case 320 :ctx.fillStyle = "#D644B4"; break;
        case 640 :ctx.fillStyle = "#00ff8d"; break;
        case 1280 :ctx.fillStyle = "#D65E44"; break;
        case 2560 :ctx.fillStyle = "#CCD644"; break;
        case 5120 :ctx.fillStyle = "#8DD644"; break;
        case 10240 :ctx.fillStyle = "#25B772"; break;
        default : ctx.fillStyle = "#ffffff";
  }
  ctx.fill();
  if (cell.value) {
    fontSize = width / 2;
    ctx.font = fontSize + 'px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(cell.value, cell.x + width / 2, cell.y + width / 2 + width/7);
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

function startGame() {
  
  // gameArea.classList.remove('hide');
  sizebloc.classList.remove('hide');
  startScreen.classList.add('hide');


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
}

function drawAllCells() {
  var i, j;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      drawCell(cells[i][j]);
    }
  }
}

function pasteNewCell() {
  var countFree = 0;
  var i, j;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      if(!cells[i][j].value) {
        countFree++;
      }
    }
  }
  if(!countFree) {
    finishGame();
    return;
  }
  while(true) {
    var row = Math.floor(Math.random() * size);
    var coll = Math.floor(Math.random() * size);
    if(!cells[row][coll].value) {
      if(base==2)
      {
        cells[row][coll].value =2* Math.ceil(Math.random() * 2);
      }
      else{
      cells[row][coll].value = base;
      }
      drawAllCells();
      return;
    }
  }
}

function moveRight () {
  var i, j;
  var coll;
  for(i = 0; i < size; i++) {
    for(j = size - 2; j >= 0; j--) {
      if(cells[i][j].value) {
        coll = j;
        while (coll + 1 < size) {
          if (!cells[i][coll + 1].value) {
            cells[i][coll + 1].value = cells[i][coll].value;
            cells[i][coll].value = 0;
            coll++;
          } else if (cells[i][coll].value == cells[i][coll + 1].value) {
            cells[i][coll + 1].value *= 2;
            score +=  cells[i][coll + 1].value;
            cells[i][coll].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell();
}

function moveLeft() {
  var i, j;
  var coll;
  for(i = 0; i < size; i++) {
    for(j = 1; j < size; j++) {
      if(cells[i][j].value) {
        coll = j;
        while (coll - 1 >= 0) {
          if (!cells[i][coll - 1].value) {
            cells[i][coll - 1].value = cells[i][coll].value;
            cells[i][coll].value = 0;
            coll--;
          } else if (cells[i][coll].value == cells[i][coll - 1].value) {
            cells[i][coll - 1].value *= 2;
            score +=   cells[i][coll - 1].value;
            cells[i][coll].value = 0;
            break;
          } else {
            break; 
          }
        }
      }
    }
  }
  pasteNewCell();
}

function moveUp() {
  var i, j, row;
  for(j = 0; j < size; j++) {
    for(i = 1; i < size; i++) {
      if(cells[i][j].value) {
        row = i;
        while (row > 0) {
          if(!cells[row - 1][j].value) {
            cells[row - 1][j].value = cells[row][j].value;
            cells[row][j].value = 0;
            row--;
          } else if (cells[row][j].value == cells[row - 1][j].value) {
            cells[row - 1][j].value *= 2;
            score +=  cells[row - 1][j].value;
            cells[row][j].value = 0;
            break;
          } else {
            break; 
          }
        }
      }
    }
  }
  pasteNewCell();
}

function moveDown() {
  var i, j, row;
  for(j = 0; j < size; j++) {
    for(i = size - 2; i >= 0; i--) {
      if(cells[i][j].value) {
        row = i;
        while (row + 1 < size) {
          if (!cells[row + 1][j].value) {
            cells[row + 1][j].value = cells[row][j].value;
            cells[row][j].value = 0;
            row++;
          } else if (cells[row][j].value == cells[row + 1][j].value) {
            cells[row + 1][j].value *= 2;
            score +=  cells[row + 1][j].value;
            cells[row][j].value = 0;
            break;
          } else {
            break; 
          }
        }
      }
    }
  }
  pasteNewCell();
}