// array of non-empty integers
// return the product of all the integers

function grow(x) {
	return x.reduce((acc, curr) => acc * curr, 1);
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);
