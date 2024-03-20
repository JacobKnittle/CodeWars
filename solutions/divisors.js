//given a number
//return array of all the numbers that are divisors of that number

function divisors(num) {
	let divisors = [];
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			divisors.push(i);
		}
	}
	if (divisors.length === 0) return `${num} is prime`;
	return divisors;
}
console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), '13 is prime');
