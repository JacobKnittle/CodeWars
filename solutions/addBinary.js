// two ints
// return the the two ints sum as a binary string

function addBinary(a, b) {
	// adds two numbers together and parseint to 2 base
	const addition = a + b;
	return addition.toString(2);
}

console.log(addBinary(1, 2), '11');
