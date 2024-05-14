// 4 functions with an array of number as input

function head(arr) {
	return arr[0];
}
function tail(arr) {
	return arr.slice(1);
}
function init(arr) {
	return arr.slice(0, arr.length - 1);
}
function last(arr) {
	return arr[arr.length - 1];
}

console.log(head([1, 2, 3, 4, 5]), 1);
console.log(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(init([1, 2, 3, 4, 5]), [1, 2, 3, 4]);
console.log(last([1, 2, 3, 4, 5]), 5);
