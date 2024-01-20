// given a string of upper and lower case check if it is a pangram( every letter in the alphabet)
// return true or false if it is or not

function isPangram(string) {
	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	const lowerCaseString = string.toLowerCase().replaceAll(' ', '');

	for (let i = 0; i < alphabet.length; i++) {
		if (!lowerCaseString.includes(alphabet[i])) {
			return false;
		}
	}
	return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'), true);

console.log(isPangram('This is not a pangram.'), false);
