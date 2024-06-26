// given a string of words that contain a number
// sort the words based on the number in the word

function order(words) {
	let array = words.split(' ');
	let sortedArray = [];
	for (let i = 0; i < array.length; i++) {
		for (j = 0; j < array.length; j++) {
			if (array[j].indexof(i) >= 0) {
				sortedArray.push(array[j]);
			}
		}
	}
	return sortedArray.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est');
console.log(
	order('4of Fo1r pe6ople g3ood th5e the2'),
	'Fo1r the2 g3ood 4of th5e pe6ople'
);
console.log(order(''), '', 'empty input should return empty string');
