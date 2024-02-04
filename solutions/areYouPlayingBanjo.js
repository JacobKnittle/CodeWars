// name string
// whether or not the person plays the banjo, name + " plays banjo" ,name + " does not play banjo"

function areYouPlayingBanjo(name) {
	if (name[0].toLowerCase() === 'r') {
		return `${name} plays banjo`;
	} else {
		return `${name} does not play banjo`;
	}
}

console.log(areYouPlayingBanjo('Adam'), 'Adam does not play banjo');
console.log(areYouPlayingBanjo('Paul'), 'Paul does not play banjo');
console.log(areYouPlayingBanjo('Ringo'), 'Ringo plays banjo');
console.log(areYouPlayingBanjo('bravo'), 'bravo does not play banjo');
console.log(areYouPlayingBanjo('rolf'), 'rolf plays banjo');
