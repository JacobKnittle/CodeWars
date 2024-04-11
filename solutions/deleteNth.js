//given a array of nums and a number of times
// return an array that only allows each number to appear up to the number of times

function deleteNth(arr, n) {
	const counts = {};
	const new_arr = [];

	arr.forEach((element) => {
		if (counts[element]) {
			counts[element]++;
		} else {
			counts[element] = 1;
		}

		if (counts[element] <= n) {
			new_arr.push(element);
		}
	});

	return new_arr;
}

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(
	deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
	[1, 1, 3, 3, 7, 2, 2, 2]
);
console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1), [12, 39, 19]);
