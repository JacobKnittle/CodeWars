//p: take in two arguments, nums being an array of numbers, val being what num that will be the number removed in the array. letter, char, empty, no funny business
//r: return the length of the array after the numbers have been removed as a number
//e: Input: nums = [0,1,2,2,3,0,4,2], val = 2
//Output: 5, nums = [0,1,4,0,3,_,_,_]

const removeElement = (nums, val) => {
  return nums.filter((el) => el !== val);
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
