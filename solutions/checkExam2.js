// two arrays of letters, same length, not empty
// return the total of matching letters +4 and -1 for incorrect letters

function checkExam(arr1, arr2) {
	let total = 0;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] === arr2[i]) {
			total += 4;
		} else if (arr2[i] === '') {
			total += 0;
		} else {
			total -= 1;
		}
	}

	if (total < 0) {
		total = 0;
	}
	return total;
}

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']), 6);
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']), 7);
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']), 16);
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']), 0);
