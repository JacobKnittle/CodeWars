// odd or even integer length, special char, let, empty, no funny business
// first and last number in array combined added to the middle number or numbers combined then added together

function closingInSum(num) {
  const filteredNum = num.toString().split('').filter(Number);

  let num1 = 0;
  let num2 = 0;

  if (filteredNum.length % 2 !== 0) {
    num1 = +filteredNum[0] + +filteredNum[filteredNum.length - 1];
    num2 = +filteredNum[Math.floor(filteredNum.length / 2)];
  } else {
    num1 = +filteredNum[0] + +filteredNum[filteredNum.length - 1];
    num2 =
      +filteredNum[Math.floor(filteredNum.length / 2) - 1] +
      +filteredNum[Math.floor(filteredNum.length / 2)];
  }

  return num1 + num2;
}

console.log(closingInSum(22225555n)); // Example 1: Should return 100
console.log(closingInSum(121n)); // Example 2: Should return 4
