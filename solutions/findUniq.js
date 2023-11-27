// array of numbers that are all the same except one. will there be str, spec?,empty?, no funny business
// return the unique number by itself

function findUniq(arr) {
  //map through array, check if the index of is equal to the last index and if it is return it
  return +arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log(findUniq([1, 0, 0]), 1);
console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([0, 0, 1]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
