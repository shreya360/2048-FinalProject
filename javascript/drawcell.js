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