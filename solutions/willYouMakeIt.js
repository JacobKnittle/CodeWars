// three params, distance to pump as int in miles, mpg as an int, fuel left as int
// return a boolean whether you will make the drive or not
const zeroFuel = (distance, mpg, gallonsLeft) => distance <= mpg * gallonsLeft;

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 25, 2), false);
