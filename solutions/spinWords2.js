// string of one or more words with only letters and spaces
// return the string with all the words that have 5 or more letters reversed

function spinWords(str) {
	//split str at space
	//loop through array and split,reverse,join if is longer than 5 chars length
	return str
		.split(' ')
		.map((el) => {
			if (el.length >= 5) {
				return el.split('').reverse().join('');
			} else {
				return el;
			}
		})
		.join(' ');
}

console.log(spinWords('Welcome'), 'emocleW');
console.log(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
console.log(spinWords('This is a test'), 'This is a test');
console.log(spinWords('This is another test'), 'This is rehtona test');
console.log(
	spinWords('You are almost to the last test'),
	'You are tsomla to the last test'
);
console.log(
	spinWords('Just kidding there is still one more'),
	'Just gniddik ereht is llits one more'
);
console.log(
	spinWords('Seriously this is the last one'),
	'ylsuoireS this is the last one'
);
