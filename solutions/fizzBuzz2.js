// number a number as input, print every number from 1 to that number, str? special char? empty? funny business?
// if number is divisble by 3 print Fizz, 5 print Buzz, by 3 and 5 Fizz Buzz

function fizzBuzz2(num) {
  //generate nums until it hits the target num, print out the fizz, buzz or fizz buzz
  let numArray = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numArray.push('Fizz Buzz');
    } else if (i % 3 === 0) {
      numArray.push('Fizz');
    } else if (i % 5 === 0) {
      numArray.push('Buzz');
    } else {
      numArray.push(i);
    }
  }
  return numArray;
}
console.log(fizzBuzz2(15));
