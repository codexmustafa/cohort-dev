function countBoxes(totalBars, barsPerBox) {

    for(let i = 0;  i < totalBars.length; i++) {
  if (totalBars % barsPerBox == 0 || totalBars % barsPerBox != 0) {
      count = count + totalBars[i]
    }
  }
  return count;
  }

  let boxs = countBoxes(20,5);

  console.log(boxs)