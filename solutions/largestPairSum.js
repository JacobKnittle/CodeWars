// arr of nums that is always nums and at least two nums
// return the total of the two largest nums

function largestPairSums(arr) {
	arr.sort((a, b) => b - a);
	return arr[0] + arr[1];
}

console.log(largestPairSums([20, 10, 30, 25, 40]), 70);
