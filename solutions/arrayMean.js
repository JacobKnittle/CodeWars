// array of nums
// find the mean which is all the nums added together divided by its length

const findAverage = (nums) => nums.reduce((a, b) => a + b, 0) / nums.length;

console.log(findAverage([-1, 0, 1, 2, 3, 4]));
