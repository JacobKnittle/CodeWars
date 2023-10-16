// random order of arrays between 0-9, empty?, str?, specil char?, no funny business
// return the missing integer

function getMissingElement(arr) {
  const completeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a, b) => a + b);
  const incompleteArray = arr.reduce((a, b) => a + b);
  return completeArray - incompleteArray;
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]), 8);
