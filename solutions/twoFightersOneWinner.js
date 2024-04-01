// an object is passed in that includes a fighter1 and fighter2 which both have a name health and damagePerAttack, and a third parameter firstAttacker
// return the winner of the fight

function declareWinner(fighter1, fighter2, firstAttacker) {
	var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
	var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
	if (fac1 > fac2) {
		return fighter1.name;
	} else if (fac2 > fac1) {
		return fighter2.name;
	} else if (fac2 === fac1) {
		return firstAttacker;
	}
}

function Fighter(name, health, damagePerAttack) {
	this.name = name;
	this.health = health;
	this.damagePerAttack = damagePerAttack;
	this.toString = function () {
		return this.name;
	};
}

console.log(
	declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew'),
	'Lew'
);

console.log(
	declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Harry'),
	'Harry'
);

console.log(
	declareWinner(
		new Fighter('Harald', 20, 5),
		new Fighter('Harry', 5, 4),
		'Harry'
	),
	'Harald'
);

console.log(
	declareWinner(
		new Fighter('Harald', 20, 5),
		new Fighter('Harry', 5, 4),
		'Harald'
	),
	'Harald'
);

console.log(
	declareWinner(
		new Fighter('Jerry', 20, 5),
		new Fighter('Harald', 21, 5),
		'Jerry'
	),
	'Harald'
);

console.log(
	declareWinner(
		new Fighter('Jerry', 30, 3),
		new Fighter('Harald', 20, 5),
		'Jerry'
	),
	'Harald'
);
