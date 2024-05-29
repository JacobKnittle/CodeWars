// two sorted arr, only contain ints, neg?, can be empty, can have dups
// return a sorted arr in asc order, remove dups

function mergeArrays(arr1, arr2) {
	const mergedArray = [];

	arr1.map((el) => mergedArray.push(el));
	arr2.map((el) => mergedArray.push(el));

	const sortedArray = mergedArray.sort((a, b) => a - b);
	return [...new Set(sortedArray)];
}

console.log(mergeArrays([-1, 0, 1, 4, 3, 2, 5], [5, 6, 7, 8]));
