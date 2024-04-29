//two ints that can be positive and neg, dec?, not ordered
// return the sum of all the numbers including the actual nums and the nums in between
function getSum(a, b) {
	// rearrange a to be lowest of the two and b be the higher
	let aCopy = a;
	let bCopy = b;
	let total = 0;
	if (b < a) {
		aCopy = b;
		bCopy = a;
	}
	//loop through all the numbers and at to total between and including the num
	while (aCopy <= bCopy) {
		total += aCopy;
		aCopy++;
	}
	return total;
}

console.log(getSum(0, 2), 3);
console.log(getSum(3, -1), 5);
