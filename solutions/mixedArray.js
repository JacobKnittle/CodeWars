// array of strings and numbers, special char? empty? no funny business
// sum of the array values as a number

function mixedArray(arr) {
  //map through and convert the array to all numbers
  //reduce the array to a single number and return it
  return arr.map(Number).reduce((a, b) => a + b, 0);
}

console.log(mixedArray([9, 3, '7', '3']));
console.log(mixedArray(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
console.log(mixedArray(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));
