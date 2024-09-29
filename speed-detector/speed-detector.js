function speedDetector(speed) {
    const limit = 70;
    const kmPerDemerit = 5;

    if (isNaN(speed)) {
        console.log("Please enter a valid speed.");
    } else if (speed <= limit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - limit) / kmPerDemerit);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", demeritPoints);
        }
    }
}

console.log(speedDetector());