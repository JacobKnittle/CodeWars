// given a string of chars, special? num? space?
// return the amount of non case sensitive duplicate chars

function duplicateCount(str) {
  // lowercase the string, check if the first instance of a char is also the last, if not add one to the count, return count
  let count = 0;
  const filtered = str
    .toLowerCase()
    .split('')
    .filter((el, i, arr) => arr.indexOf(el) !== arr.lastIndexOf(el));
  return new Set(filtered).size;
}

console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2);
console.log(duplicateCount('Indivisibility'), 1);
console.log(duplicateCount('Indivisibilities'), 2);
