//takes object of key value pairs
// returns properties as strings such as a=1

function solution(pairs) {
	let stringPairs = [];
	for (const [key, value] of Object.entries(pairs)) {
		stringPairs.push(`${key} = ${value}`);
	}
	return stringPairs.join(',');
}

console.log(solution({ a: 1, b: 2 }), 'a = 1,b = 2');
console.log(solution({ a: 'b', b: 'a' }), 'a = b,b = a');
console.log(solution({ 0: 'a', b: 2 }), '0 = a,b = 2');
console.log(solution({ b: 1, c: 2, e: 3 }), 'b = 1,c = 2,e = 3');
console.log(solution({}), '');
