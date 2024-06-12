// given a string with an age number in it between 0 - 9, first char is a num
// return the num as an int

function getAge(str) {
	// grab the first char of the str and convert it to a num
	return +str[0];
}

console.log(getAge('4 years old'), 4);
