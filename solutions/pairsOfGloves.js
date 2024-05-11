// array of string with colors
// how many pairs of gloves you have as a int

// This function takes an array of gloves, where each glove is represented by its color.
function numberOfPairs(gloves) {
	// Initialize the variable to count pairs.
	let pairs = 0;
	// Initialize an empty object to store counts of each color of gloves.
	let counts = {};

	// Loop through each color of gloves in the array.
	for (let color of gloves) {
		// If the color is not already in the counts object, initialize its count to 0.
		if (!counts.hasOwnProperty(color)) counts[color] = 0;

		// Increment the count for the current color.
		if (++counts[color] === 2) {
			// If the count reaches 2, it means we've found a pair.
			// Decrement the count by 2 to signify the pair is formed.
			counts[color] -= 2;
			// Increment the pairs count.
			pairs++;
		}
	}

	// Return the total number of pairs found.
	return pairs;
}

console.log(numberOfPairs(['red', 'red', 'green']), 1);
console.log(numberOfPairs(['red', 'green', 'blue']), 0);
console.log(
	numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']),
	3
);
