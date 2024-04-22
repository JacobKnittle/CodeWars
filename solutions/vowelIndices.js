// given a string of a word
// return an array of the positions of the vowels

function vowelIndices(word) {
	const alphabet = 'aeiouy';
	let resultArray = [];
	for (let i = 0; i < word.length; i++) {
		if (alphabet.includes(word[i].toLowerCase())) {
			resultArray.push(i + 1);
		}
	}
	return resultArray;
}

console.log(vowelIndices([]));
console.log(vowelIndices('hello'), [2, 5]);
console.log(vowelIndices('apple'), [1, 5]);
