// arr of nums that will be positive or neg
// return array of ascending numbers filling in gaps of nums

function pipefix(nums) {
	let newArray = [];
	for (let i = nums[0]; i <= nums[nums.length - 1]; i++) {
		newArray.push(i);
	}
	return newArray;
}

console.log(pipefix([1, 4]));
console.log(pipefix([-1, 1, 4]));
