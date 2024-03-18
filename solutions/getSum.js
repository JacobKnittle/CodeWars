// given two nums which can be positive or negative
// return the sum all the numbers in between and including the parameters

function getSum(a, b) {
	let min = Math.min(a, b);
	let max = Math.max(a, b);
	return ((max - min + 1) * (min + max)) / 2;
}

console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);
console.log(getSum(2, 2), 2);
