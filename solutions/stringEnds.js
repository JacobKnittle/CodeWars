//prep
//p: two strings, empty?, numbers or special characters?
//r: return boolean if the first string ends with the 2nd
//e: ('abc', 'bc') true
//p: 1.

function solution(str, ending) {
  return str.endsWith(ending);
}

const result = solution('abc', 'bc');
console.log(result);
