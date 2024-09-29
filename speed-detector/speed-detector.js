const speedDetector = (currentSpeed) => {

    let speedLimit = 70;

    if (currentSpeed < 70) {
      return "Ok";
    } else if (currentSpeed > 70) {
      let demeritPoints = (currentSpeed - speedLimit) / 5;
      if (demeritPoints > 12) {
        return `License Suspended`;
      } else {
        return `Points: ${demeritPoints}`;
      }
    }
  };

  // Tested when speed is 60
  console.log(speedDetector(60));

  // Tested when speed is 80
  console.log(speedDetector(100));

  // Tested when speed is 140
  console.log(speedDetector(140));