// encode function that takes in lowercase string of letters and spaces with vowels
// return the string with the corresponding number a -> 1, e -> 2, i -> 3, o -> 4, u -> 5

// decode function that takes in lowercase string of letters, spaces, and numbers
//return the string converting the number to its corresponding letter

function encode(str) {
	let strCopy = '';
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'a') {
			strCopy += 1;
		} else if (str[i] === 'e') {
			strCopy += 2;
		} else if (str[i] === 'i') {
			strCopy += 3;
		} else if (str[i] === 'o') {
			strCopy += 4;
		} else if (str[i] === 'u') {
			strCopy += 5;
		} else {
			strCopy += str[i];
		}
	}
	return strCopy;
}

function decode(str) {
	let strCopy = '';
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '1') {
			strCopy += 'a';
		} else if (str[i] === '2') {
			strCopy += 'e';
		} else if (str[i] === '3') {
			strCopy += 'i';
		} else if (str[i] === '4') {
			strCopy += 'o';
		} else if (str[i] === '5') {
			strCopy += 'u';
		} else {
			strCopy += str[i];
		}
	}
	return strCopy;
}

console.log(encode('hi there'), 'h3 thd2r2');
console.log(decode('h3 th2r2'), 'hi there');
