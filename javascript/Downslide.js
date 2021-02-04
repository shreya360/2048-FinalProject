
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
    audio('music/move.mp3');
    
  }