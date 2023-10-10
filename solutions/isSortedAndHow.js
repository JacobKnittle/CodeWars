// array of integers, arrays will be valid, always will be one correct answer,
// if in ascending order return "yes, ascending", if in a descending return "yes, descending", "no" otherwise

function isSortedAndHow(arr) {
  const ascendingArr = [...arr].sort((a, b) => a - b);
  const descendingArr = [...arr].sort((a, b) => b - a);
  if (JSON.stringify(arr) === JSON.stringify(ascendingArr)) {
    return 'yes, ascending';
  } else if (JSON.stringify(arr) === JSON.stringify(descendingArr)) {
    return 'yes, descending';
  } else {
    return 'no';
  }
}

console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([4, 2, 30]));
