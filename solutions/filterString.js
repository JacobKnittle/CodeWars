//p: string of letters and numbers, special character or empty
//r: numbers from the string in order and together
//e: ("a1b2c3"), 123,
//p: split the string, loop through array and return numbers in a new array. join them and make sure they are numerical

// function filterString(string) {
//   const numString = string
//     .split('')
//     .filter((el) => !isNaN(el))
//     .map(Number)
//     .join('');

//   return +numString;
// }

const filterString = (value) =>
  +value
    .split('')
    .filter((n) => !isNaN(n))
    .join('');

const result = filterString('123');
console.log(result);
