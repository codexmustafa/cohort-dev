function trafficLightAction(color) {
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
    // let color = 'red';
    switch(color) {
      case 'red' : console.log("Stop");
      break;
      case 'Yellow' : console.log("Slow Down");
      break;
      case 'Green': console.log('Go');
      break;
      case 'Blue' : console.log('Invalid Color');
    } 
  }

let sign = trafficLightAction('Green');

// console.log(sign)

function temp (value, scale) {
  switch (scale) {
    case "C" : return  `${(value *  9/5) + 32}F`;
    break;
    case "F" : return `${(value -32) * 5/9}C`;
    break;
  }
}

console.log(temp(2))