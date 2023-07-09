//p: a string of spaced numbers, always one number at least
//r: the highest number with a space then the lowest number in a string
//e: ("1 2 5 3 "), "5 1"
//p: split them, iterate into numbers, sort from highest to lowest, pull out first and last index

function highAndLow(numbers) {
  const reordered = numbers
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a)
    .toString();

  const firstAndLast = `${reordered[0]} ${reordered[reordered.length - 1]}`;

  return firstAndLast.toString();
}

const result = highAndLow('1 2 5 3');
console.log(result);
