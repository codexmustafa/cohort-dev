function countBoxes(totalBars, barsPerBox) {
    let countboxes = 0;
    for(let i = 0;  i < totalBars.length; i++) {
  if (totalBars % barsPerBox == 0 || totalBars % barsPerBox != 0) {
    countboxes = countboxes + totalBars[i]
    }
  }
  return countboxes;
  }

  let boxs = countBoxes(20,5);

  console.log(boxs)