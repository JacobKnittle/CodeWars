//p: two-dimensonal array of integers, could be empty
//r: put them into one array and sort them
//e: [[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
//p: join the arrays together then sort them

function flattenAndSort(arr) {
  return arr.flatMap((subArray) => subArray).sort((a, b) => a - b);
}

const result = flattenAndSort([
  [3, 2, 1],
  [7, 9, 8],
  [6, 4, 5],
]);
const result2 = flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]);

console.log(result);
console.log(result2);
