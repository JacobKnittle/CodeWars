// lowercase string with alphabet letters and no spaces
// return the longest streak of vowels in the string ex io = 2

function solve(s) {
	let cur = 0;
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		if ('aeiou'.includes(s[i])) {
			cur++;
			if (cur > max) {
				max = cur;
			} else {
				cur = 0;
			}
		}
	}
	return max;
}
console.log(solve('codewarriors'), 2);
console.log(solve('suoidea'), 3);
