// function squareSum(numbers) {
// 	if (numbers.length === 0) return 0;
// 	return numbers.map((x) => x * x).reduce((a, b) => a + b);
// }

const squareSum = (numbers) => {
	if (numbers.length === 0) return 0;
	return numbers.map((x) => x * x).reduce((a, b) => a + b);
};

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);
