// integers as parameter, can be positive or negative
// return the return of each individual number split up as an absolute value

function sumDigits(number) {
	//convert to abs value
	//toString
	//split them

	// reduce them

	return Math.abs(number)
		.toString()
		.split('')
		.reduce((a, b) => a + +b, 0);
}

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
