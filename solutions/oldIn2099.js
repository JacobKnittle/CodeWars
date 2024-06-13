// two params year of birth, year in the future or past
// dates in future return You are ... years old, years in the past You will be born in ... years(s)

function calculateAge(yearOfBirth, yearToCompare) {
	const yearDifference = Math.abs(yearOfBirth - yearToCompare);
	if (yearOfBirth < yearToCompare && yearDifference != Math.abs(1)) {
		return `You are ${yearDifference} years old.`;
	} else if (yearDifference === Math.abs(1) && yearToCompare > yearOfBirth) {
		return 'You are 1 year old.';
	} else if (yearDifference === Math.abs(-1) && yearToCompare < yearOfBirth) {
		return 'You will be born in 1 year.';
	} else if (yearDifference === 0) {
		return 'You were born this very year!';
	} else {
		return `You will be born in ${yearDifference} years.`;
	}
}

console.log(calculateAge(2000, 2019), 'You are 19 years old.');
console.log(calculateAge(2000, 2001), 'You are 1 year old.');
console.log(calculateAge(2019, 2000), 'You will be born in 19 years.');
console.log(calculateAge(2001, 2000), 'You will be born in 1 year.');
