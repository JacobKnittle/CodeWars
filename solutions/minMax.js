//p: array or list with at least one element
//r: array with the lowest and highest value
//e: [3434, 5]=> [5, 3434], [1] => [1,1]

const minMax = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  return [sorted[0], sorted[sorted.length - 1]];
};

const result = minMax([3434, 5, 34]);
const result2 = minMax([1]);
console.log(result);
console.log(result2);
