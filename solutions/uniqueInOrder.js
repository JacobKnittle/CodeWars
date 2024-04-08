//takes in a array or string
// return an array where an array does not have the same char or num next to each other

function uniqueInOrder(list) {
	let noDupsArray;
	if (typeof list === 'string') {
		noDupsArray = list.split('');
	} else {
		noDupsArray = list;
	}
	result = [];
	for (let i = 0; i <= noDupsArray.length - 1; i++) {
		if (noDupsArray[i] !== noDupsArray[i + 1]) {
			result.push(noDupsArray[i]);
		}
	}
	return result;
}

console.log(uniqueInOrder('ABBCcADD'), ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
