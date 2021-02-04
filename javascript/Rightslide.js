
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
    audio('music/move.mp3');
    
  }