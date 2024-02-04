//p: array of numbers of at least two, can have repeats, any order
//r: second oldest age, oldest age in an array
//e: [1,5,87,45,8,8] should return [45, 87]

// const twoOldestAges = (ages) => {
//   const sortedAges = ages.sort((a, b) => a - b);
//   return [sortedAges[sortedAges.length - 2], sortedAges[sortedAges.length - 1]];
// };

const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2);
//
const result = twoOldestAges([1, 5, 87, 45, 8, 8]);
console.log(result);
