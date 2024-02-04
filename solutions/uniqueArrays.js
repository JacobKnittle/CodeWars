// multidimensonal arrays, any empty arrays, letters chars?
// return the number of unique arrays that are possible by taking one element from each array

function solve(multiArr) {
  const setArray = multiArr.map((arr) => new Set(arr));
  return setArray.reduce((a, c) => a * c.size, 1);
}

console.log(solve([[1, 2], [4], [5, 6]]), 4);
console.log(
  solve([
    [1, 2],
    [4, 4],
    [5, 6, 6],
  ]),
  4
);
console.log(
  solve([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
  8
);
console.log(
  solve([
    [1, 2, 3],
    [3, 4, 6, 6, 7],
    [8, 9, 10, 12, 5, 6],
  ]),
  72
);
