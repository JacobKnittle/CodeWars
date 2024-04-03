// array of positive numbers
//return the the lowest number concatenating the numbers together without duplicates

function minValue(arr) {
	// convert to a set to remove dups
	const newSet = new Set(arr);
	const newArr = [...newSet];

	// sort ascending
	const sortedArr = newArr.sort((a, b) => a - b);

	//concate as string and convert to num
	const strSortedArr = sortedArr.map((el) => el.toString());
	return +strSortedArr.reduce((a, b) => a + b);
}

console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([6, 7, 8, 7, 6, 6]), 678);
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
