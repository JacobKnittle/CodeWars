// array of numbers, wont be empty, any strings or special chars?, no funny business
// return the average of the scores as a single number

function getAverage(arr) {
  //reduce the array, and then divide by its length, round it to a whole number
  return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
}

console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
