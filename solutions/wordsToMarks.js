// input is a string of lowercase letters that wont be empty
//give a sum of the alphabet positions

function wordsToMarks(string) {
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

	return string
		.split('')
		.map((el) => alphabet.indexOf(el) + 1)
		.reduce((acc, curr) => acc + curr);
}

console.log(wordsToMarks('attitude'), 100);
console.log(wordsToMarks('friends'), 75);
console.log(wordsToMarks('family'), 66);
console.log(wordsToMarks('selfness'), 99);
console.log(wordsToMarks('knowledge'), 96);
