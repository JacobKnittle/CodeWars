// a b c are ints that are positive between 1 and 10
// return largest value using var1 * (var2+var3)
function expressionMatter(a, b, c) {
	let arr = [a, b, c].sort((a, b) => a - b);
	return arr[2] * (arr[0] + arr[1]);
}

console.log(expressionMatter(5, 1, 3), 20);
console.log(expressionMatter(3, 5, 7), 105);
console.log(expressionMatter(5, 6, 1), 35);
console.log(expressionMatter(1, 6, 1), 8);
console.log(expressionMatter(2, 6, 1), 14);
console.log(expressionMatter(6, 7, 1), 48);
