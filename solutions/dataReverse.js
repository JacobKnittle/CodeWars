// array of numbers
// split it into 4 arrays every 8 ints/bits

const dataReverse = (data) => {
	const result = [];

	while (data.length) {
		result.push(...data.splice(-8));
	}

	return result;
};

console.log(
	dataReverse([
		[
			1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
			0, 1, 0, 1, 0, 1, 0,
		],
	]),
	[
		1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		1, 1, 1, 1, 1, 1, 1,
	]
);
