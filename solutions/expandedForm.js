// given a whole number that is always greater than 0
// return the string form of the number ex: 12 = '10 + 2'

const expandedForm = (n) =>
	n
		.toString()
		.split('')
		.reverse()
		.map((a, i) => a * Math.pow(10, i))
		.filter((a) => a > 0)
		.reverse()
		.join(' + ');
console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');
