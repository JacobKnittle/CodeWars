// divisior integer and a bound which the numbers will go up to but not including, always willl be divisor found
// return highest number that is divisible by the divisior without hitting the bound

function maxMultiple(divisor, bound) {
	let largestInt = divisor;

	for (let i = divisor; i <= bound; i++) {
		if (i % divisor === 0) {
			largestInt = i;
		}
	}
	return largestInt;
}

console.log(maxMultiple(2, 7), 6);
console.log(maxMultiple(3, 10), 9);
console.log(maxMultiple(7, 17), 14);
console.log(maxMultiple(10, 50), 50);
console.log(maxMultiple(37, 200), 185);
console.log(maxMultiple(7, 100), 98);
