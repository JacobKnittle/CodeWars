// array of nums that can be neg, 0, +, length > 1
// return an array if they are multiples of their own index

function multipleOfIndex(arr) {
	return arr.filter((el, i) => el % i === 0 || el === 0);
}

console.log(multipleOfIndex([22, -7, 14, 17]));
