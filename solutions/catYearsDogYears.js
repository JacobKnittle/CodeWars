// takes human years as a parameter, human years will be whole numbers at least 1
// returns an array of humanYears, catYears, dogYears

function humanYearsCatYearsDogYears(humanYears) {
	// cat years
	let catYears = 0;
	let dogYears = 0;
	// 15 years for first year
	// 9 years for second year
	// 4 years for third year or more
	for (let i = 1; i <= humanYears; i++) {
		if (i === 1) catYears += 15;
		else if (i === 2) catYears += 9;
		else catYears += 4;
	}
	for (let i = 1; i <= humanYears; i++) {
		if (i === 1) dogYears += 15;
		else if (i === 2) dogYears += 9;
		else dogYears += 5;
	}

	// dog years
	// 15 years for first year
	// 9 years for second year
	// 5 years for third year or more
	return [humanYears, catYears, dogYears];
}

console.log(humanYearsCatYearsDogYears(3), [3, 28, 29]);
