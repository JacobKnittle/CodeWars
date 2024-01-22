// varying length array with 0s, 1s
// return binary value as number

const binaryArrayToNumber = (arr) => {
	return arr
		.reverse()
		.map((el, i) => el * Math.pow(2, i))
		.reduce((acc, curr) => acc + curr, 0);
};

console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);
