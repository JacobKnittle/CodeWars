// number that will be always be positive
// return a boolean if the number is in ascending order

function tidyNumber(n) {
	return (
		n ===
		+n
			.toString()
			.split('')
			.sort((a, b) => a - b)
			.join('')
	);
}

console.log(tidyNumber(456), true);
console.log(tidyNumber(32), false);
