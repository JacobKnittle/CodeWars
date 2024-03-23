//given a number
//return the number of divisors that go into that number

function getDivisorsCnt(n) {
	let divisorsCount = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			divisorsCount++;
		}
	}
	return divisorsCount;
}

console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);
