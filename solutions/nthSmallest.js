// arr of positive, negative, and zeros. duplicates possible, at least length of three
// return the nth smallest elment in the array

function nthSmallest(arr, pos) {
	return arr.sort((a, b) => a - b)[pos - 1];
}

console.log(nthSmallest([3, 1, 2], 2));
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3));
console.log(nthSmallest([-5, -1, -6, -18], 4));
console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5));
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4));
console.log(nthSmallest([2, 1, 3, 3, 1, 2], 3));
