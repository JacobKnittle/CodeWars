//p: a string of spaced numbers, always one number at least
//r: the highest number with a space then the lowest number in a string
//e: ("1 2 5 3 "), "5 1"
//p: split them, iterate into numbers, sort from highest to lowest, pull out first and last index

function highAndLow(numbers) {
  const numberArray = numbers.split(' ').map(Number);

  // Find the highest and lowest numbers
  const highest = Math.max(...numberArray);
  const lowest = Math.min(...numberArray);

  return `${highest} ${lowest}`;
}
const result = highAndLow('1 2 5 3');
console.log(result);
