// arr of 10 ints 0-9
// returns string in phone number format "(123) 456-7890"

function createPhoneNumber(nums) {
	let phoneTemplate = '(xxx) xxx-xxxx';

	for (let i = 0; i < nums.length; i++) {
		phoneTemplate = phoneTemplate.replace('x', nums[i]);
	}
	return phoneTemplate;
}

console.log(
	createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
	'(123) 456-7890'
);
