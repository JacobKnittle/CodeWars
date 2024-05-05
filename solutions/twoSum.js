// arr of numbers and a target num, always valid with at least two nums target will always be valid
// return the indexs as an array of the two items that add up to that target number

function twoSum(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) return [i, j];
		}
	}
}

console.log(twoSum([1, 2, 3], 4), [0, 2]);
console.log(twoSum([2, 1, 4], 3), [0, 1]);
console.log(twoSum([2, 2, 3], 4), [0, 1]);
