//p: two parameters n for a number, s for a string, are they ever not a number or string?
//r: a string of s char with the number of times n
//e: (5, "#"), "#####")
//p: repeat the s parameter for the n amount of times and return that

// function repeatStr(n, s) {
//   return s.repeat(n);
// }

const repeatStr = (n, s) => s.repeat(n);
const result = repeatStr(5, '#');
console.log(result);
