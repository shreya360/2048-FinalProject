var canvas =document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var sizeInput = document.getElementById("size");
var changeSize = document.getElementById("change-size");
var scoreLabel = document.getElementById("score");

var score = 0;
var size = 4;
var width = canvas.width / size - 6;

var cells =[];
var fontSize;
var loss= false;

startGame();

function startGame(){
    createCells();
    drawAllCells();
    pasteNewCell();
}

function cell(row,coll){
    this.value = 0;
    this.x = coll * width + 5 * (coll +1);
    this.y = row * width + 5 *(row+1);
}

function createCells() {
    for (var i=0; i< size ; i++){
        cells[i] = [];
        for (var j = 0; j< size; j++){
            cells[i][j] = new cell(i,j);

        }
    }
}

function drawCell(cell) {
    ctx.beginPath();
    ctx.rect(cell.x ,cell.y, width,width);

    switch(cell.value){
        case 0 :ctx.fillStyle = "#d6a3a3"; break;
        case 2 :ctx.fillStyle = "#FF5733"; break;
        case 4 :ctx.fillStyle = "#BDC81E"; break;
        case 8 :ctx.fillStyle = "#B133FF"; break;
        case 16 :ctx.fillStyle = "#1EC88C"; break;
        case 32 :ctx.fillStyle = "#ADB725"; break;
        case 64 :ctx.fillStyle = "#D64475"; break;
        case 128 :ctx.fillStyle = "#D644B4"; break;
        case 256 :ctx.fillStyle = "#00ff8d"; break;
        case 512 :ctx.fillStyle = "#D65E44"; break;
        case 1024 :ctx.fillStyle = "#CCD644"; break;
        case 2048 :ctx.fillStyle = "#8DD644"; break;
        case 4096 :ctx.fillStyle = "#25B772"; break;
        default : ctx.fillStyle = "#ffffff";
    }

    ctx.fill();
    if (cell.value) {
        fontSize = width /2;
        ctx.font = fontSize + "px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(cell.value, cell.x+width/2, cell.y+width/2);
    }
}

function drawAllCells() {
    for(var i=0; i<size; i++) {
        for(var j=0; j<size; j++){
            drawCell(cells[i][j]);
        }
    }
}

function pasteNewCell() {
    while(true){
        var row= Math.floor(Math.random() * size);
        var coll= Math.floor(Math.random() * size);
        if (!cell([row] [coll].value)){
            cells[row][coll].value = 2 * Math.ceil(Math.random() * 2);
            drawAllCells();
            return;
        }
    }
}

document.onkeydown = function (event){
    if(!loss){
        if (event.key == 38 || event.key == 87) moveUp();
        if (event.key == 39 || event.key == 68) moveRight();
        if (event.key == 40 || event.key == 83) moveDown();
        if (event.key == 37 || event.key == 65) moveLeft();
        scoreLabel.innerHTML = "Score :" + score;
    }
}

function moveUp(){

}

function moveRight(){
    
}

function moveDown(){
    
}

function moveLeft(){
    
}