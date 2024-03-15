// given a string sentence with spaces
// capitalize every word in the sentence

function JadenCase(str) {
	return str
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}

console.log(JadenCase("How can mirrors be real if our eyes aren't real"));
