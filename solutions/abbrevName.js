//first and last name string
// capital initials of that name with a dot in between

function abbrevName(fullName) {
	return fullName
		.split(' ')
		.map((name) => name.slice(0, 1))
		.join('.')
		.toUpperCase();
}

console.log(abbrevName('Sam Harris'), 'S.H');
console.log(abbrevName('Patrick Feenan'), 'P.F');
console.log(abbrevName('Evan Cole'), 'E.C');
console.log(abbrevName('P Favuzzi'), 'P.F');
console.log(abbrevName('David Mendieta'), 'D.M');
