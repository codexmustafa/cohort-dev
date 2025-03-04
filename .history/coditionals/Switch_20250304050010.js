function trafficLightAction(color) {
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
    // let color = 'red';
    switch(color) {
      case 'red' : "Stop");
      break;
      case 'Yellow' : "Slow Down");
      break;
      case 'Green': 'Go');
      break;
      case 'Blue' : 'Invalid Color');
    } 
  }

let sign = trafficLightAction('Green');

// console.log(sign)