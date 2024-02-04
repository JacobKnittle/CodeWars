//p: array of integers and string numbers, empty?, char?
//r: non-string integers total - string number total = number returned
//e: ([9, 3, '7', '3']), 2);
//p: separate non strings and strings into different arrays, add them together, take the integers and subtract them from the string numbers

// function divCon(x) {
//   const nums = x
//     .filter((a) => typeof a === 'number')
//     .reduce((a, b) => a + b, 0);

//   const letters = x.filter((a) => typeof a === 'string');
//   const letTotal = letters.map((el) => Number(el)).reduce((a, b) => a + b, 0);
//   return nums - letTotal;
// }

function divCon(x) {
  // if both numbers are added are integers addition is fine if it was a string being added it would have to be converted to a number. But since subtraction does not concatenate a number conversion isnt necessary.
  return x.reduce(
    (acc, cur) => (typeof cur === 'number' ? acc + cur : acc - cur),
    0
  );
}

const result = divCon([9, 3, '7', '3']);
console.log(result);
