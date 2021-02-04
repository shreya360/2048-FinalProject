
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