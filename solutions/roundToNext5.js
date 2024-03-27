// given a number which will always be valid positive or negative
// return the nearest number that can be rounded up to that is divisible by 5

function roundToNext5(n) {
	while (n % 5 !== 0) n++;
	return n;
}

console.log(roundToNext5(3), 5);
console.log(roundToNext5(-2), 0);
