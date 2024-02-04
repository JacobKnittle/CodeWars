//given a string of alphabet chars. any num?, special char?, spaces?, no funny business
// return the difference in the totals as a number

function calc(x) {
	return (
		x
			.split('')
			.map((c) => c.charCodeAt(0))
			.join('')
			.split('')
			.map(Number)
			.filter((x) => x === 7).length * 6
	);
}

console.log(calc('abcdef'), 6);
console.log(calc('ifkhchlhfd'), 6);
console.log(calc('aaaaaddddr'), 30);
console.log(calc('jfmgklf8hglbe'), 6);
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);
