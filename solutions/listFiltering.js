// array of non-negative nums and string
// return an array without the strings

function filter_list(list) {
	return list.filter((el) => typeof el === 'number');
}

console.log(filter_list([1, 2, 'a', 'b']), [1, 2]);
console.log(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15]);
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123]);
