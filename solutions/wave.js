// string that may be empty but always lowercase, if there is white space act like it is an empty seat
// return an array of the word where each element has a letter that is uppercased once in order and pass over white space

function wave(str) {
	// create an empty array and push a wave to it for each iteration of a loop
	let waveArr = [];

	for (let i = 0; i < str.length; i++) {
		let copy = str.split('');
		if (copy[i] !== ' ') {
			copy[i] = copy[i].toUpperCase();
			waveArr.push(copy.join(''));
		}
	}
	return waveArr;
}

console.log(wave(' wave '), [' Wave ', 'wAve', 'waVe', 'wavE']);
