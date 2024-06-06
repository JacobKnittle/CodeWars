// given a string that can contain alphanumeric and special chars
// return the string without numbers

function stringClean(s) {
	return s
		.split('')
		.filter((el) => el != parseInt(el))
		.join('');
}

console.log(stringClean('(E3at m2e2!!)'), '(Eat me!!)');
