// 8 ages of grandparents that died
// return the int of the formula rounded down

function predictAge(a1, a2, a3, a4, a5, a6, a7, a8) {
	let agesArray = [a1, a2, a3, a4, a5, a6, a7, a8];
	// multiply each age by itself

	// add them together

	// square root result

	//divide by 2

	const finalAge = agesArray.map((el) => el * el).reduce((a, b) => a + b, 0);
	return Math.floor(Math.sqrt(finalAge) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);
