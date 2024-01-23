//array of one-letter strings, each letter represents a direction for one block of walking
//return true if the walk takes exactly 10 minutes otherwise false

function isValidWalk(walk) {
	let north = 0;
	let south = 0;
	let west = 0;
	let east = 0;
	if (walk.length !== 10) return false;
	for (let i = 0; i < walk.length; i++) {
		if (walk[i] === 'n') north++;
		else if (walk[i] === 's') south++;
		else if (walk[i] === 'w') west++;
		else if (walk[i] === 'e') east++;
	}
	if (north === south && west === east) return true;
	else return false;
}
console.log(
	isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
	'should return true'
);
console.log(
	isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
	'should return false'
);
console.log(isValidWalk(['w']), 'should return false');
console.log(
	isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
	'should return false'
);
