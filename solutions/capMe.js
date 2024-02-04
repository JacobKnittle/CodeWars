// array of names, empty?, special char?, num?
// return the array of names with a capital first letter and lowercase the rest of letters

function capMe(str) {
	return [...str].map(
		(arr) => arr.slice(0, 1).toUpperCase() + arr.slice(1).toLowerCase()
	);
}

console.log(capMe(['jo', 'nelson', 'jurie']));
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));
