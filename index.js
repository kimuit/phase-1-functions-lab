

function distanceFromHqInBlocks (pickUp) {
    let blockDistance = Math.abs(pickUp - 42);
    return blockDistance;
}


function distanceFromHqInFeet(distance){
    return (distanceFromHqInBlocks(distance) * 264);
}


function distanceTravelledInFeet (start, destination) {
    let distanceTravelledInBlock = Math.abs(destination - start);
    return distanceTravelledInBlock * 264;
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);

    if (distance > 0 && distance <= 400){
        return 0;
    }else if (distance < 2000){
        return (distance - 400) * 0.02;
    }if(distance > 2500){
        return `cannot travel that far`;
    }
    else {
        return 25;
    }

}