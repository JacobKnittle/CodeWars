//p: arr of numbers, will not by empty and will have at least the amount of numbers as the number parameter
//r:  the last even numbers in the array depending on the number parameter
//e: ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
//p: filter out the even numbers, slice the negative number variable

function evenNumbers(array, num) {
  return array.filter((el) => el % 2 === 0).slice(-num);
}

const result = evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
console.log(result);
