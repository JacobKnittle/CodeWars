// arr of ints as strs and nums
// return sum of arr values if all of them were converted to numbers

const sumMix = (x) => x.reduce((acc, curr) => acc + +curr, 0);

console.log(sumMix([-1, '0', 1, '2']), 2);
