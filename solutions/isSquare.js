// given a num that will always be a number
// return boolean if the number is a square number

function isSquare(n) {
	return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(-1), false);
console.log(isSquare(0), true);
console.log(isSquare(3), false);
console.log(isSquare(4), true);
console.log(isSquare(25), true);
console.log(isSquare(26), false);
console.log(isSquare(71));
