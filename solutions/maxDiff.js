//p: array of numbers, can be empty or negative, not sorted
//r: biggest difference of the two integers
//e: [1, 2, 3, 4] => 3
//p: if list is empty or a single integer return 0. 2. sort 3. take the difference and convert it to a positive integer

// function maxDiff(list) {
//   if (list.length === 1 || list.length === 0) {
//     return 0;
//   } else {
//     const organized = list.sort((a, b) => a - b);
//     return organized[organized.length - 1] - organized[0];
//   }
// }

const maxDiff = (list) => {
  if (!list.length) return 0;
  return Math.max(...list) - Math.min(...list);
};

const result = maxDiff([-0, 1, 2, -3, 4, 5, -6]);
console.log(result);
