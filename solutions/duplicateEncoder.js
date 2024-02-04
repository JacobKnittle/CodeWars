// given a string, empty?, special char(Y), num, no funny business
// return a string with "(" if the char only occurs once and ")" if it occurs multiple times

function duplicateEncoder(str) {
  // map through string, first and last index the same return "(" otherwise ")"
  str = str.toLowerCase();
  return str
    .split('')
    .map((el, i) => (str.indexOf(el) === str.lastIndexOf(el) ? '(' : ')'))
    .join('');
}

console.log(duplicateEncoder('din'), '(((');
console.log(duplicateEncoder('recede'), '()()()');
console.log(duplicateEncoder('Success'), ')())())');
console.log(duplicateEncoder('(( @'), '))((');
