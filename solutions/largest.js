//num of nums to remove, array of numbers. any special char, strings, empty, no funny business
// the amount of numbers that the n parameter asks for from the array

function largest(n, array) {
  //sort the array descending
  return array
    .sort((a, b) => b - a)
    .slice(0, n)
    .sort((a, b) => a - b);
}

console.log(largest(2, [5, 6, 7, 4, 3, 2, 1]));
