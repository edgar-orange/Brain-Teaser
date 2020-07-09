let arrayCounter = [12, 14, 1969, 100756];

function calcualteFuel(arrayCounter) {
  let totalFuelReq = 0;

  for(let i = 0; i < arrayCounter.length; i++) {
    totalFuelReq = totalFuelReq + Math.floor(arrayCounter[i]/3) - 2;
  }

  // console.log(totalFuelReq);
  return totalFuelReq;
};

console.log(calcualteFuel(arrayCounter));

module.exports = calcualteFuel; 