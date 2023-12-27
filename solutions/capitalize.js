//p: string lowercase with no spaces, nums or special chara? empty?
//r: an array of the string zero index even character capitalize and one index odd number
//e: ("codewars"),['CoDeWaRs', 'cOdEwArS']);
//p: loop through the string and capitalize the even chars, push to a variable. again with the odds and then return the variable

function capitalize(s) {
	const oddCapitals = s
		.split('')
		.map((letter, i) => (i % 2 === 0 ? letter.toUpperCase() : letter))
		.join('');
	const evenCapitals = s
		.split('')
		.map((letter, i) => (i % 2 !== 0 ? letter.toUpperCase() : letter))
		.join('');
	return [oddCapitals, evenCapitals];
}

const result = capitalize('codewars');
console.log(result);
