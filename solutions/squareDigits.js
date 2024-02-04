//given a number, neg?, floating?, 0?, empty?
//every individual number is squared then concatenated together

function squareDigits(num) {
  return +num
    .toString()
    .split('')
    .map((x) => x * x)
    .join('');
}

console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);
