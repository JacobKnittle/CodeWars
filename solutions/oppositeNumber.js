// given a positive or negative number
// return the opposite number positive to negative or negative to positive

const opposite = (number) =>
	Math.sign(number) === 1 ? -Math.abs(number) : Math.abs(number);

console.log(opposite(1), -1);

console.log(opposite(0), 0);

console.log(opposite(4.25), -4.25);

console.log(opposite(3.3333333), -3.3333333);

console.log(opposite(-12525220.3325), 12525220.3325);

console.log(opposite(-5), 5);
