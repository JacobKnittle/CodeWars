// array of numbers missing one number in the array from 0 to the highest num, will it always be missing num, special char?, letters, no funny business
// return the missing number in the array from 0 to the highest

function missingNumber(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
