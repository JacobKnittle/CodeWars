// an array of integers that is not empty, every element will appear twice except for one, any strings, special characters, single numbers

// return the integer that does appear twice

// [4,1,2,1,2] => 4

function singleNumber(nums) {
  //loop through the nums parameter and find the single instance
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
