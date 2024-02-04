// arr of numbers, two of the numbers only occur once while the rest occur twice, empty, string, special char, no funny business
//return the sum of the numbers that occur once

function sumOnce(arr) {
  //filter the numbers out that only occur once, reduce them
  return arr
    .filter((el) => arr.indexOf(el) === arr.lastIndexOf(el))
    .reduce((a, c) => a + c, 0);
}

console.log(sumOnce([4, 5, 7, 5, 4, 8]), 15);
console.log(sumOnce([9, 10, 19, 13, 19, 13]), 19);
console.log(sumOnce([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(sumOnce([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(sumOnce([5, 10, 19, 13, 10, 13]), 24);
