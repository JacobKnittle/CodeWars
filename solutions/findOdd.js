//given arr of nums there is one integer that appears odd
//return the one odd number that appears

function findOdd(arr) {
	return arr.find((item) => arr.filter((el) => el === item).length % 2 === 1);
}

console.log(findOdd([7], 7));
console.log(findOdd([0], 0));
console.log(findOdd([1, 1, 2], 2));
console.log(findOdd([0, 1, 0, 1, 0], 0));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4));
