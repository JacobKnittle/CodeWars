//p: an array of numbers, special char, empty, or letters?
//r: return the array if the number is a multiple of 3 return 'fizz', 5 return 'buzz', and 3 and 5 'FizzBuzz'
//e: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] => [1,2,'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 12, 13, 14, 'FizzBuzz]
//p: map through array if %3 and %5 'FizzBuzz', %3 is 'Fizz', %5 is 'Buzz'

function fizzBuzz(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

const result = fizzBuzz(15);
console.log(result);
