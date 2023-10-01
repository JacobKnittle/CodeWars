// an integer, any string, special char, empty, no funny business
// number of digits in the parameter

function digits(n) {
  // convert to string and measure length
  return n.toString().length;
}

console.log(digits(0));
console.log(digits(66));
