// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    const hqStreetNumber = 42;
    return Math.abs(streetNumber -  hqStreetNumber);
  }
  function distanceFromHqInFeet(streetNumber) {
    distanceFromHqInBlocks();
    const hqStreetNumber = 42;
    const blockLength = 264;
    return distanceFromHqInBlocks(streetNumber) * blockLength;
 }
 function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(start - destination);
    const blockLength = 264;
    return distanceInBlocks * blockLength;
 }
 function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }