// string with no spaces
// if all the occurences of every char is equal (case insensitive) return true else false

function validateWord(str) {
	str = str.toLowerCase();
	const newSet = new Set(str);
	return str.length % newSet.size === 0;
}

console.log(validateWord('abcabc'), true, 'The word was: "abcabc" \n');
console.log(validateWord('Abcabc'), true, 'The word was: "Abcabc" \n');
console.log(validateWord('abc123'), true, 'The word was: "abc123" \n');
console.log(validateWord('abcabcd'), false, 'The word was: "abcabcd" \n');
console.log(validateWord('abc!abc!'), true, 'The word was: "abc!abc!" \n');
console.log(validateWord('abc:abc'), false, 'The word was: "abc:abc" \n');
