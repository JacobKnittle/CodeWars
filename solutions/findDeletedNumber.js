// two arrays one ordered and one unordered, one array will be missing a number or could be empty or could be same
// return the missing number if there is one

function findDeletedNumber(arr, mixArr) {
  let arrSum = arr.reduce((a, b) => a + b, 0);
  let mixArrSum = mixArr.reduce((a, b) => a + b, 0);

  return arrSum - mixArrSum;
}
console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]));
console.log(
  findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3])
);
