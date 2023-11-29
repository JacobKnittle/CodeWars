//array of numbers, no empty, str?, spec?, can have duplicate, no funny business
//return the most frequent number in the array and the highest if there are multiple duplicates

const highestRank = (arr) =>
  arr.sort(
    (a, b) =>
      arr.filter((val) => val === b).length -
        arr.filter((val) => val === a).length || b - a
  )[0];

console.log(highestRank([10, 12, 8, 12, 7, 6, 4, 10, 12]), 12);
