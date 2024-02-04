//p: an array of numbers with at least one number and no duplicates, 2nd parameter is either 'value' or 'index'
//r: either return the lowest value in the array or its index
//e: [2,1,3,4,5], 'value'), 1), [2,1,3,4,5], 'index'), 1)
//p: loop through the array find the lowest value. if the toReturn parameter is value return the num if it is index return its index

function min(arr, toReturn) {
  if (toReturn === 'value') return Math.min(...arr);
  if (toReturn === 'index') {
    return arr.indexOf(Math.min(...arr));
  }
}

const result = min([2, 1, 3, 4, 5], 'value');
const result2 = min([2, 3, 1, 4, 5], 'index');

console.log(result);
console.log(result2);
