//string of lowercase letters, numbers, symbols
// return the string reversed and with only letters

function reverseLetter(str) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	//split, reverse str
	// filter out non letters
	//join

	return str
		.split('')
		.reverse()
		.filter((el) => alphabet.includes(el))
		.join('');
}

console.log(reverseLetter('krishan'), 'nahsirk');

console.log(reverseLetter('ultr53o?n'), 'nortlu');

console.log(reverseLetter('ab23c'), 'cba');

console.log(reverseLetter('krish21an'), 'nahsirk');
