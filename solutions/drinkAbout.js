// given an age assuming always a positive int
// return a string what they should drink

const peopleWithAgeDrink = (age) =>
	age < 14
		? 'drink toddy'
		: age < 18
		? 'drink coke'
		: age < 21
		? 'drink beer'
		: 'drink whisky';

// function peopleWithAgeDrink(age) {
// 	switch (true) {
// 		case age < 14:
// 			return 'drink toddy';
// 		case age < 18:
// 			return 'drink coke';
// 		case age < 21:
// 			return 'drink beer';
// 		case age >= 21:
// 			return 'drink whisky';
// 		default:
// 			return 'invalid age';
// 	}
// }

console.log(peopleWithAgeDrink(13), 'drink toddy');
console.log(peopleWithAgeDrink(17), 'drink coke');
console.log(peopleWithAgeDrink(20), 'drink beer');
console.log(peopleWithAgeDrink(23), 'drink whisky');
