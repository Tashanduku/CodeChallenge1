function carSpeed (speed) {
    const speedLimit = 70
    

    if (speed <= speedLimit) {
        console.log("Ok")
        return;
    }
    
       const points = Math.floor((speed - speedLimit) / 5);
    
    if (points > 12) {
        console.log(`Points: ${points}`);
        console.log("License suspended");

    }
    else {
        console.log(`Points: ${points}`); // prints the points if the limit has not exceeded
    }
}
carSpeed(80)
carSpeed(150)