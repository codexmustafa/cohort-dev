function countBoxes(totalBars, barsPerBox) {
    let count = 0;
    for(let i = 0;  i < totalBars.length; i++) {
  if (totalBars % barsPerBox == 0 || totalBars % barsPerBox != 0) {
      count = count + totalBars[i]
    }
  }
  return barsPerBox;
  }

  let boxs = countBoxes(20,4)