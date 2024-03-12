// string of xs and os capitalized and not capitalized. Also other chars
// return true if xs and os are equal in occurence

function XO(str) {
	str = str.toLowerCase();
	let xCount = 0;
	let oCount = 0;
	//lowercase all the chars
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'x') {
			xCount++;
		} else if (str[i] === 'o') {
			oCount++;
		}
	}
	return xCount === oCount ? true : false;
}

console.log(XO('xo'), true);
console.log(XO('xxOo'), true);
console.log(XO('xxxm'), false);
console.log(XO('Oo'), false);
console.log(XO('ooom'), false);
