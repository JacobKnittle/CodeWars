//p: non-empty list of positive values in a multidimensional array
//r: total of the lowest values in each array
//e:[[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]] => 9
//p: sort each array, pull the first index from each, reduce them and return it
function sumOfMinimums(arr) {
  let lowestValues = [];
  for (i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => a - b);
  }
  for (i = 0; i < arr.length; i++) {
    lowestValues.push(arr[i][0]);
  }
  return lowestValues.reduce((a, b) => a + b);
}

const result = sumOfMinimums([
  [7, 9, 8, 6, 2],
  [6, 3, 5, 4, 3],
  [5, 8, 7, 4, 5],
]);
console.log(result);
