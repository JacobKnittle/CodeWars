//given an array of numbers which can be positive or negative
//return the index of the number that is in between the other two numbers

function gimme(arr) {
	//test for the max and min numbers
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	//return the index if it is not either the max or min
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== max && arr[i] !== min) {
			return i;
		}
	}
}

console.log(gimme([2, 3, 1]), 0);
console.log(gimme([5, 10, 14]), 1);
