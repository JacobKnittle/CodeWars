//prep
//p: array of positive and negative numbers, empty?, zero?
//r: return the integer that doesnt have matching positive and negative numbers as a number
//e: [1, -1, 2, -2, 3, 3] => 3
//p: loop through array, determine who has an instance of + and - and return that number

function solve(arr) {
  return arr.find((value) => !arr.includes(-value));
}

const result = solve([1, -1, 2, -2, 3, 3]);
console.log(result);
