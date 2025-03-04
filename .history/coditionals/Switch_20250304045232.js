function trafficLightAction(color) {
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
    // let color = 'red';
    switch(color) {
      case 'red' : console.log("Stop");
      break;
      case 'Yellow' : console.log("Slow Down");
      break;
      case 'Green': 'Go';
      break;
      case 'Blue' : 'Invalid Color'
    } 
  }

