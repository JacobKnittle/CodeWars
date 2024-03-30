// an array of arrays with a pair of numbers that can be positive or negative
// return whether the member is senior or open if the first number in the array is 55 or older and the second number is greater than 7 for handicap

function openOrSenior(data) {
	return data.map((el) => (el[0] >= 55 && el[1] > 7 ? 'Senior' : 'Open'));
}

console.log(
	openOrSenior([
		[45, 12],
		[55, 21],
		[19, -2],
		[104, 20],
	]),
	['Open', 'Senior', 'Open', 'Senior']
);
console.log(
	openOrSenior([
		[3, 12],
		[55, 1],
		[91, -2],
		[53, 23],
	]),
	['Open', 'Open', 'Open', 'Open']
);
console.log(
	openOrSenior([
		[59, 12],
		[55, -1],
		[12, -2],
		[12, 12],
	]),
	['Senior', 'Open', 'Open', 'Open']
);
