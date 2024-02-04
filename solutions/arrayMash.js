//p: two different arrays that will be the same length and can have all the different values.
//r: one combined array that is alternating
//e: ([1, 2, 3], ['a', 'b', 'c']), [1, 'a', 2, 'b', 3, 'c'])
//p: loop within a loop for both arrays and run them through adding a new element to the new array each time

function arrayMash(arr1, arr2) {
  let combinedArr = [];
  for (let i = 0; i < arr1.length; i++) {
    combinedArr.push(arr1[i], arr2[i]);
  }
  return combinedArr;
}
const result = arrayMash([1, 2, 3], ['a', 'b', 'c']);
console.log(result);
