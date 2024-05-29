// egg contains X chromosome and the input sperm contains the X or Y chromosome
// if the sperm has X chromosome return "Congratulations! You're going to have a daughter." If Y chromosome return "Congratulations! You're going to have a son."

const chromosomeCheck = (sperm) =>
	sperm === 'XX'
		? "Congratulations! You're going to have a daughter."
		: "Congratulations! You're going to have a son.";

console.log(
	chromosomeCheck('XX'),
	"Congratulations! You're going to have a daughter."
);
console.log(
	chromosomeCheck('XY'),
	"Congratulations! You're going to have a son."
);
