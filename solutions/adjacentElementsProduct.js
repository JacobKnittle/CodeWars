//p: array of integers that is at least 2 long, can be negative or zero
//r: the product of the two biggest numbers in the array that are adjacent to each other
//e: [3, 6, -2, -5, 7, 3]), 21
//p: loop through array, check if the current product of two numbers is bigger than the next, if it is replace it, if not keep it and go to the next

// function adjacentElementsProduct(array) {
//   return array.reduce((maxProduct, currentNumber, index, array) => {
//     if (index < array.length - 1) {
//       const product = currentNumber * array[index + 1];
//       return Math.max(maxProduct, product);
//     }
//     return maxProduct;
//   }, -Infinity);
// }

function adjacentElementsProduct(array) {
  let newArr = [];
  for (i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1]);
  }
  return Math.max(...newArr);
}
const result = adjacentElementsProduct([3, 6, -2, -5, 7, 3]);
console.log(result);
