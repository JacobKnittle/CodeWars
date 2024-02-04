// two words in a string separated by space, can contain uppercase, number
//swap the first char of the two words

function spoonerize(words) {
	const firstWord =
		words.split(' ')[1].slice(0, 1) + words.split(' ')[0].slice(1);
	const secondWord = words.slice(0, 1) + words.split(' ')[1].slice(1);
	return firstWord + ' ' + secondWord;
}

console.log(spoonerize('nit picking'), 'pit nicking');
console.log(spoonerize('wedding bells'), 'bedding wells');
console.log(spoonerize('jelly beans'));
