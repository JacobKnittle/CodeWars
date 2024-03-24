//given a year number 1600 - 4000
//

function isLeapYear(year) {
	if (year % 400 === 0) {
		return true;
	} else if (year % 100 === 0) {
		return false;
	} else if (year % 4 === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isLeapYear(2020), true);

console.log(isLeapYear(2000), true);

console.log(isLeapYear(2015), false);

console.log(isLeapYear(2100), false);
