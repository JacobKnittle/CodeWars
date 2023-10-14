// arr of integers, negatives, at least 3 int, zero, duplicates but not when summing
//return the sum of the three largest numbers not including duplicates

function maxTriSum(arr) {
  const mySet = new Set(arr);
  const myArray = [...mySet];
  const triArray = myArray.sort((a, b) => b - a);
  return triArray[0] + triArray[1] + triArray[2];
}

console.log(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]));
