// given a string that can be empty, contain upper or lower chars, nums/special?
// if there are no lowercase strings return false otherwise true

String.prototype.isUpperCase = function () {
	return this == this.toUpperCase();
};

console.log('c'.isUpperCase(), false);
console.log('C'.isUpperCase(), true);
console.log('hello I AM DONALD'.isUpperCase(), false);
console.log('HELLO I AM DONALD'.isUpperCase(), true);
