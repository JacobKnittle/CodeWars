// string representing a job that is case insensitive
// return what drink string they would drink based on profession

function getDrinkByProfession(param) {
	switch (param.toLowerCase()) {
		case 'jabroni':
			return 'Patron Tequila';
		case 'school counselor':
			return 'Anything with Alcohol';
		case 'programmer':
			return 'Hipster Craft Beer';
		case 'bike gang member':
			return 'Moonshine';
		case 'politician':
			return 'Your tax dollars';
		case 'rapper':
			return 'Cristal';
		default:
			return 'Beer';
	}
}
