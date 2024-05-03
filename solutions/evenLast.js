// array of numbers, can be empty
// return the sum of all the ints that have an even index multiplied by the integer of the last index, return 0 if empty

function evenLast(nums) {
	if (nums.length === 0) return 0;
	let total = 0;
	for (let i = 0; i < nums.length; i++) {
		if (i % 2 === 0) {
			total += nums[i];
		}
	}
	return total * nums[nums.length - 1];
}

console.log(evenLast([2, 3, 4, 5]));
