//p: a string of all the ASCII characters potentially including upper and lower case, number?
//r: true if all chars are unique or false if there is a match
//e: ("  nAa"),false), ("abcdef"),true)
//p: split string, loop through and and test if two elements are equal, if there are return false, otherwise true

function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}

const result = hasUniqueChars('  nAa');
const result2 = hasUniqueChars('abcdef');
console.log(result);
console.log(result2);
