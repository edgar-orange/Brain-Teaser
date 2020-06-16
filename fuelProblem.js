
function calcualteFuel(mass) {
  return Math.floor(mass/3) - 2 ;
};

let testRun = calcualteFuel(42);
console.log(testRun);