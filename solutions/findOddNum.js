// arr of ints, one of the ints will appear an odd amount of times
// return the num the appears an odd amount of times

function findOddNum(arr) {
	return arr.find((item) => arr.filter((el) => el == item).length % 2 !== 0);
}

console.log(findOddNum([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1));
