//given a string of upper and lowercase letters
//convert the otlier casing to the opposite. If there is a tie convert to lowercase

function solve(s) {
	let upperCaseCount = 0;
	let lowerCaseCount = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i].toUpperCase()) {
			upperCaseCount++;
		} else {
			lowerCaseCount++;
		}
	}
	return upperCaseCount > lowerCaseCount ? s.toUpperCase() : s.toLowerCase();
}

console.log(solve('code'), 'code');
console.log(solve('CODe'), 'CODE');
console.log(solve('COde'), 'code');
console.log(solve('Code'), 'code');
