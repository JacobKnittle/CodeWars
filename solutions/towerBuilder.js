//given a int for the num of floors
// build a tower with *
function towerBuilder(nFloors) {
	var tower = [];
	for (var i = 0; i < nFloors; i++) {
		tower.push(
			' '.repeat(nFloors - i - 1) +
				'*'.repeat(i * 2 + 1) +
				' '.repeat(nFloors - i - 1)
		);
	}
	return tower;
}

console.log(towerBuilder(1), ['*']);
console.log(towerBuilder(2), [' * ', '***']);
console.log(towerBuilder(3), ['  *  ', ' *** ', '*****']);
