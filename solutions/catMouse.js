//given a string starting with C, varying amount of .... inbetween, and ending with a m with no spaces, string format.
// if there are 3 or less ... in a row return 'Caught!' otherwise return 'Caught!',

function catMouse(str) {
	return str.includes('....') ? 'Escaped!' : 'Caught!';
}

console.log(catMouse('C....m'), 'Escaped!');
console.log(catMouse('C..m'), 'Caught!');
console.log(catMouse('C.....m'), 'Escaped!');
