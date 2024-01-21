// a string of lowercase letters that given points to either the left side or right,
// left
// w - 4
//  p - 3
//  b - 2
//  s - 1

//return Right side Wins! or Left side wins!

// right
// m - 4
//  q - 3
//  d - 2
//  z - 1

function alphabetWar(fight) {
	const leftSide = ['s', 'b', 'p', 'w'];
	const rightSide = ['z', 'd', 'q', 'm'];
	let leftSideTotal = 0;
	let rightSideTotal = 0;

	for (let i = 0; i < fight.length; i++) {
		for (let j = 0; j < leftSide.length; j++) {
			if (fight[i] === leftSide[j]) {
				leftSideTotal += j + 1;
			}
		}
		for (let k = 0; k < rightSide.length; k++) {
			if (fight[i] === rightSide[k]) {
				rightSideTotal += k + 1;
			}
		}
	}
	if (leftSideTotal > rightSideTotal) {
		return 'Left side wins!';
	} else if (leftSideTotal < rightSideTotal) {
		return 'Right side wins!';
	} else {
		return "Let's fight again!";
	}
}

console.log(alphabetWar('z'), 'Right side wins!');
console.log(alphabetWar('zdqmwpbs'), "Let's fight again!");
console.log(alphabetWar('zzzzs'), 'Right side wins!');
console.log(alphabetWar('wwwwww'), 'Left side wins!');
