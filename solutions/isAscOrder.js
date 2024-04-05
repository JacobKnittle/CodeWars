function inAscOrder(arr) {
	// if we are trying to compare all the elements you should stop one element short so that it does not compare to nothing
	for (let i = 0; i < arr.length - 1; i++) {
		// compares elements from the current one to the next one
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
}

console.log(
	inAscOrder([1, 2, 4, 7, 19]),
	true,
	'The list of numbers "1, 2, 4, 7, 19" is in ascending order'
);
console.log(
	inAscOrder([1, 2, 3, 4, 5]),
	true,
	'The list of numbers "1, 2, 3, 4, 5" is in ascending order'
);
console.log(
	inAscOrder([1, 6, 10, 18, 2, 4, 20]),
	false,
	'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order'
);
console.log(
	inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]),
	false,
	'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order'
);
